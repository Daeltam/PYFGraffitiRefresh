// ==UserScript==
// @name         Pixelya Canvas Tab: Graffiti Refresh
// @namespace    pixelya.fun
// @version      1.5
// @description  Adds a "Graffiti refresh" button to the Canvas tab, between the modal divider and 'Image Upload' h3
// @match        *://pixelya.fun/*
// @match        *://*.pixelya.fun/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    // --- CONFIG ---
    // base64Image: Put your base64-encoded PNG image string here (without data: prefix)
    // filename: Name for the uploaded file (arbitrary, but should be .png)
    // defaultCanvasId: Canvas identifier as string for API call
    // defaultCoords: Coordinates string in "X_Y" format for API call
    // defaultImageAction: Action for API ("wipe", "protect", etc.)
    const base64Image = "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"; // <-- YOUR IMAGE BASE64 HERE
    const filename = "hardcoded.png";
    const defaultCanvasId = "1";
    const defaultCoords = "-584_-281";
    const defaultImageAction = "wipe";

    /**
     * Convert base64 image data (string) to a Blob object.
     * This allows us to treat the image as a binary file in-browser.
     * @param {string} base64 - The base64 string (no data: prefix)
     * @param {string} type - The MIME type (e.g. "image/png")
     * @returns {Blob} - The resulting Blob
     */
    function base64ToBlob(base64, type = "image/png") {
      // Remove all whitespace (line breaks, spaces) from the base64 string
      const cleanBase64 = base64.replace(/\s/g, '');
      const binary = atob(cleanBase64);
      const array = [];
      for (let i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {type: type});
    }

    /**
     * Main function: Attempts to inject the "Graffiti refresh" button
     * exactly between the modal divider and the "Image Upload" h3,
     * but only in the Canvas tab of the Modtools panel.
     *
     * The function is called repeatedly so it works if you switch tabs,
     * but will only inject the button once per tab open.
     */
    function injectCanvasUploadButton() {
        // 1. Find all .content elements inside modal or window containers
        //    Filter for the one that is a tab bar with the "Canvas" tab selected
        const tabbars = Array.from(document.querySelectorAll('.modal-content .content, .win-content .content'))
            .filter(el => el.querySelector('.modallink.selected') &&
                          el.querySelector('.modallink.selected').textContent.trim() === "Canvas");
        // If we're not on the Canvas tab, abort
        if (tabbars.length === 0) return;

        // 2. For each found tab bar (should only be one, but robust for more):
        tabbars.forEach(tabbar => {
            // 2a. Find the next sibling .content (where the actual Canvas tool content is rendered)
            let panel = tabbar.nextElementSibling;
            while (panel && !panel.classList.contains('content')) panel = panel.nextElementSibling;
            if (!panel) return;

            // 2b. Prevent duplicate button injection (if already present, do nothing)
            if (panel.querySelector('#canvas-upload-panel')) return;

            // 3. Find the modal divider and the "Image Upload" h3 within the panel
            const modalDivider = panel.querySelector('.modaldivider');
            // Find an <h3> with text exactly "Image Upload"
            const imageH3 = Array.from(panel.querySelectorAll('h3')).find(h3 => h3.textContent.trim() === "Image Upload");

            // If structure not found (shouldn't happen except on UI changes), abort
            if (!modalDivider || !imageH3) return;

            // 4. Create the button wrapper div, styled to match the panel
            //    - Smaller font, subtle background, border, and a hover effect
            const wrapper = document.createElement('div');
            wrapper.id = 'canvas-upload-panel';
            wrapper.style.margin = '12px 0 0 0';
            wrapper.innerHTML = `
                <button id="graffiti-refresh-btn"
                    style="
                        padding: 5px 12px;
                        background: #f7f7f7;
                        color: #202327;
                        border: 1px solid #cccccc;
                        border-radius: 3px;
                        cursor: pointer;
                        font-weight: 500;
                        font-size: 14px;
                        transition: background 0.2s;
                    "
                    onmouseover="this.style.background='#e0e0e0'"
                    onmouseout="this.style.background='#f7f7f7'"
                >
                    Graffiti refresh
                </button>
                <span id="graffiti-refresh-status" style="margin-left:1em;font-weight:500;font-size:13px;"></span>
            `;

            // 5. Insert our button wrapper *after* the modalDivider and *before* the h3
            modalDivider.parentNode.insertBefore(wrapper, imageH3);

            // 6. Add upload logic to the button:
            //    - On click, package the image as a File in a FormData object
            //    - POST it to the API, with session credentials included (browser handles cookies automatically)
            //    - Update status text with result
            wrapper.querySelector('#graffiti-refresh-btn').addEventListener('click', async function () {
                const status = wrapper.querySelector('#graffiti-refresh-status');
                status.textContent = "Uploading...";

                // Convert the base64 image to a Blob, then to a File for FormData
                const imageBlob = base64ToBlob(base64Image, "image/png");
                const file = new File([imageBlob], filename, { type: "image/png" });

                // Prepare the multipart/form-data for the API
                const formData = new FormData();
                formData.append('imageaction', defaultImageAction);
                formData.append('image', file, filename);
                formData.append('canvasid', defaultCanvasId);
                formData.append('coords', defaultCoords);

                // Send the POST request with user credentials (cookies) included
                try {
                    const response = await fetch("https://pixelya.fun/api/modtools", {
                        method: "POST",
                        credentials: "include", // Important: browser sends session cookies
                        body: formData,
                    });
                    if (response.ok) {
                        status.textContent = "✅ Upload successful!";
                    } else {
                        status.textContent = "❌ Upload failed: " + response.statusText;
                    }
                } catch (e) {
                    status.textContent = "❌ Upload error: " + e;
                }
            });
        });
    }

    // Repeatedly attempt injection every 300ms.
    // This allows the script to handle dynamic tab switches/redraws in the UI.
    setInterval(injectCanvasUploadButton, 300);
})();
