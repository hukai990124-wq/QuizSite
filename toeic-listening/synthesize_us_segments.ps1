$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech
$taskSynth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$taskSynth.SelectVoice('Microsoft Zira Desktop')
$taskFormat = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(
    22050, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen,
    [System.Speech.AudioFormat.AudioChannel]::Mono)
$taskJobs = Get-Content -Raw -Encoding utf8 (Join-Path $PSScriptRoot 'data/extra-audio-jobs.json') | ConvertFrom-Json
try {
    foreach ($taskJob in $taskJobs) {
        $taskBase = [System.IO.Path]::GetFileNameWithoutExtension($taskJob.audio)
        $taskDirectory = Join-Path $PSScriptRoot ('_seg/' + ($taskJob.audio.Split('/')[1]))
        New-Item -ItemType Directory -Force -Path $taskDirectory | Out-Null
        for ($taskIndex = 0; $taskIndex -lt $taskJob.segments.Count; $taskIndex++) {
            $taskSegment = $taskJob.segments[$taskIndex]
            if ($taskSegment.accent -ne 'en-US') { continue }
            $taskWave = Join-Path $taskDirectory ($taskBase + '-' + $taskIndex + '.wav')
            $taskText = [System.Security.SecurityElement]::Escape($taskSegment.text)
            $taskSsml = '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><prosody rate="0%">' + $taskText + '</prosody></speak>'
            $taskSynth.SetOutputToWaveFile($taskWave, $taskFormat)
            $taskSynth.SpeakSsml($taskSsml)
            $taskSynth.SetOutputToNull()
        }
    }
} finally {
    $taskSynth.Dispose()
}
Write-Output 'American English segments generated.'
