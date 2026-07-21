# Fix language switching in Play Store preview pages

The language switcher buttons in `play/privacy.html` and `play/index.html` are currently non-functional because the `js/main.js` script, which contains the translation logic, is not included in these files.

## Proposed Changes

### [Website]

#### [MODIFY] [privacy.html](file:///C:/android/BadmintonMatchCoach/play/privacy.html)
- Add `<script src="../js/main.js"></script>` before the closing `</body>` tag.

#### [MODIFY] [index.html](file:///C:/android/BadmintonMatchCoach/play/index.html)
- Add `<script src="../js/main.js"></script>` before the closing `</body>` tag.

## Verification Plan

### Manual Verification
- Open `play/privacy.html` in a browser.
- Click the "Svenska" button and verify that the text changes to Swedish.
- Click the "English" button and verify that the text changes back to English.
- Repeat the same for `play/index.html`.
