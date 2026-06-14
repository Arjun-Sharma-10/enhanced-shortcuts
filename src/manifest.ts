import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
    "manifest_version": 3,
    "name": "Extra Shortcuts",
    "version": "1.0",
    "description": "Shortcuts for things I wanted to have shortcuts",
    "icons": {
        "16": "icons/16px.png",
        "32": "icons/32px.png",
        "48": "icons/48px.png",
        "128": "icons/128px.png"
    },

    "background": {
        "service_worker": "src/background.ts",
        "type": "module"
    },

    "action": {
        "default_popup": "src/popup/popup.html"
    },

    "permissions": [
        "commands",
        "activeTab",  
        "clipboardWrite",
        "scripting"
    ],
    
    "commands": {
        "copy-url": {
            "suggested_key": {
                "default": "Alt+Shift+D",
                "mac": "Option+C"
            },
        "description": "Copy URL"
        },
        "tab-window": {
            "suggested_key": {
                "default": "Alt+W",
                "mac": "Option+W"
            },
        "description": "Send tab to new window"
        },
        "dupe-tab": {
            "suggested_key": {
                "default": "Alt+K",
                "mac": "Option+K"
            },
        "description": "Duplicate tab"
        }
    }
});