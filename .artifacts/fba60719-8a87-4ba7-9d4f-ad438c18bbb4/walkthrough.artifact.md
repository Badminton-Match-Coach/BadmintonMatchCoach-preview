# Walkthrough - Fixed language switching in Play Store preview pages

I have fixed the issue where the language buttons were not working on the Privacy Policy and Play Store index pages.

## Changes Made

### Website

#### [privacy.html](file:///C:/android/BadmintonMatchCoach/play/privacy.html)
Added the missing `main.js` script to enable translation logic.
```diff
     </main>
   </div>
+  <script src="../js/main.js"></script>
 </body>
 </html>
```

#### [index.html](file:///C:/android/BadmintonMatchCoach/play/index.html)
Added the missing `main.js` script to enable translation logic.
```diff
       </footer>
     </main>
   </div>
+  <script src="../js/main.js"></script>
 </body>
 </html>
```

## Verification Results

### Manual Verification
- Verified that both pages now include the `../js/main.js` script.
- The script uses relative paths and handles data-i18n attributes, which are already present in the HTML files.
- Language selection is persisted in `localStorage`.
