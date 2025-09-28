# Scroll-to-Button Extension

A Chrome extension that maps mouse actions to button clicks on the page.

## Features

- **Mouse Wheel Scrolls**
    - Scrolling up → clicks the button with ID `m-1f`
    - Scrolling down → clicks the button with ID `p-1f`
    - Holding **Shift** while scrolling up → clicks the button with ID `m-1s`
    - Holding **Shift** while scrolling down → clicks the button with ID `p-1s`

- **Mouse Side Buttons**
    - Side "Back" button → clicks the button with ID `m-1f`
    - Side "Forward" button → clicks the button with ID `p-1f`
    - Holding **Shift** + Side "Back" → clicks the button with ID `m-1s`
    - Holding **Shift** + Side "Forward" → clicks the button with ID `p-1s`

## 📂 Project structure

```
Wheelie/
 ├─ manifest.json   # Extension configuration
 ├─ content.js      # Script handling scroll events
 └─ README.md       # Documentation
```

---

## ⚙️ Installation

1. Create a folder `my-extension`.
2. Add `manifest.json`, `content.js`, and `README.md` inside it.
3. Open Chrome and navigate to:

   ```
   chrome://extensions/
   ```
4. Enable **Developer mode**.
5. Click **Load unpacked**.
6. Select the `my-extension` folder.

---

## 🚀 Usage

1. Open a webpage that matches the configured URL pattern.
2. Use the mouse wheel:

    * **Scroll up** → triggers a click on the element with ID `m-1f`
    * **Scroll down** → triggers a click on the element with ID `p-1f`

---

## 🛠 Customization

* To change which buttons are clicked, edit the `document.getElementById(...)` selectors in `content.js`.
* To change where the extension works, adjust the `matches` field in `manifest.json`.

