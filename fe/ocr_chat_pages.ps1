# Windows PowerShell 5.1; local Japanese OCR, no network or model calls.
# API: https://learn.microsoft.com/uwp/api/windows.media.ocr.ocrengine.recognizeasync
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Storage.StorageFile,Windows.Storage,ContentType=WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder,Windows.Graphics.Imaging,ContentType=WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine,Windows.Foundation,ContentType=WindowsRuntime]
$null = [Windows.Globalization.Language,Windows.Globalization,ContentType=WindowsRuntime]
$asTask = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetParameters().Count -eq 1
} | Select-Object -First 1
function Wait-WinRT($operation, [Type]$resultType) {
    $task = $asTask.MakeGenericMethod($resultType).Invoke($null, @($operation))
    $task.Wait()
    $task.Result
}
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage([Windows.Globalization.Language]::new('ja'))
if (!$engine) { throw 'Install the Japanese OCR language pack first.' }
$repoPath = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$cachePath = Join-Path $PSScriptRoot 'raw/chat-ocr-pages-v2.json'
$results = @{}
if (Test-Path -LiteralPath $cachePath) {
    (Get-Content -LiteralPath $cachePath -Raw -Encoding UTF8 | ConvertFrom-Json).PSObject.Properties | ForEach-Object { $results[$_.Name] = $_.Value }
}
Get-ChildItem -LiteralPath (Join-Path $repoPath 'site/fe/images') -File | Where-Object { $_.Name -match '^2025-(jan|jun)-a-p\d+\.jpg$' } | ForEach-Object {
    if (!$results.ContainsKey($_.Name)) {
        $file = Wait-WinRT ([Windows.Storage.StorageFile]::GetFileFromPathAsync($_.FullName)) ([Windows.Storage.StorageFile])
        $stream = Wait-WinRT ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
        try {
            $decoder = Wait-WinRT ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
            $bitmap = Wait-WinRT ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
            try {
                $result = Wait-WinRT ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])
                # OCR groups columns independently; restore visual row order
                # so left-margin question numbers stay with their question.
                $results[$_.Name] = ($result.Lines | Sort-Object @{Expression={[Math]::Round(($_.Words | Select-Object -First 1).BoundingRect.Y / 10)}}, @{Expression={($_.Words | Select-Object -First 1).BoundingRect.X}} | ForEach-Object { $_.Text }) -join "`n"
            } finally { $bitmap.Dispose() }
        } finally { $stream.Dispose() }
    }
}
$results | ConvertTo-Json -Depth 3 | Set-Content -LiteralPath $cachePath -Encoding UTF8
Write-Output "Cached $($results.Count) OCR pages."
