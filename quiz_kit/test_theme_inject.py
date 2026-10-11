import unittest
import tempfile
from pathlib import Path

from theme_inject import ASSETS, copy_theme_assets, inject_html


class ThemeInjectionTest(unittest.TestCase):
    def test_generator_copies_compiled_navigation_without_restoring_legacy_js(self):
        with tempfile.TemporaryDirectory() as directory:
            target = Path(directory)
            copy_theme_assets(target)
            self.assertEqual((target / "quizbank-theme.js").read_bytes(), (ASSETS / "quizbank-theme.js").read_bytes())
            self.assertIn("/assets/back-to-top.mjs", (target / "quizbank-theme.js").read_text(encoding="utf-8"))
            copy_theme_assets(target)
            self.assertEqual((target / "quizbank-theme.js").read_bytes(), (ASSETS / "quizbank-theme.js").read_bytes())

    def test_adds_shared_stylesheet_and_runtime(self):
        source = "<html><head></head><body><main>Practice</main></body></html>"

        result, changed = inject_html(source)

        self.assertTrue(changed)
        self.assertIn('id="quizbank-theme-css"', result)
        self.assertIn('href="/assets/quizbank-theme.css"', result)
        self.assertIn('id="quizbank-theme-js"', result)
        self.assertIn('src="/assets/quizbank-theme.js"', result)
        self.assertLess(result.index("quizbank-theme-css"), result.index("</head>"))
        self.assertLess(result.index("quizbank-theme-js"), result.index("</body>"))

    def test_is_idempotent(self):
        source = "<html><head></head><body></body></html>"
        once, _ = inject_html(source)

        twice, changed = inject_html(once)

        self.assertFalse(changed)
        self.assertEqual(once, twice)

    def test_preserves_existing_line_endings(self):
        source = "<html>\r\n<head>\r\n</head>\r\n<body>\r\n</body>\r\n</html>"

        result, _ = inject_html(source)

        self.assertIn("\r\n<link", result)
        self.assertNotIn("\n<link", result.replace("\r\n", ""))

    def test_rejects_unrecognized_document(self):
        with self.assertRaises(ValueError):
            inject_html("<main>Practice</main>")


if __name__ == "__main__":
    unittest.main()
