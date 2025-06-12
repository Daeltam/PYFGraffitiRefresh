# Pixelya Canvas Tab: Graffiti Refresh Userscript

This userscript adds a "Graffiti refresh" button to the Canvas tab in the Pixelya.fun admin/modtools interface, allowing admins to quickly upload a predefined image to the canvas using the Pixelya API.

## Features

- Injects a custom button into the Canvas tab UI for easy access.
- Uploads a preconfigured base64-encoded image to the canvas at specific coordinates.
- Uses browser credentials (cookies/session) for authentication—**no sensitive data is stored in the script**.

## Requirements

- **Administrator or Moderator badge is required**:  
  This script only works for users who have admin/mod privileges on Pixelya.fun and have access to the Modtools panel.  
  Regular users will not be able to use the API endpoint leveraged by this script.

## Usage

- The current Pixelya graffiti image is **already hardcoded** in the file (`base64Image` variable).  
- Copy the userscript file and install it in your preferred userscript manager (e.g., Tampermonkey or Violentmonkey).
- If you wish to use a different image, update the `base64Image` variable in the script with your own base64-encoded PNG image (no `data:image/png;base64,` prefix).
- Make sure you are logged in as an admin/mod on Pixelya.fun.
- Open the Canvas tab in the admin panel and use the "Graffiti refresh" button as needed.

## Security Notice

- This script does **not** contain or expose any secret credentials.  
- Upload permissions are enforced by Pixelya's backend.  
- The script will not function unless you are already authenticated as an admin/mod.

## Development

This code was developed with the assistance of **GitHub Copilot**.

---

**Enjoy using the Pixelya Graffiti Refresh tool!**
