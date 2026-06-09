import { copyCurrentURL } from "./shortcut-actions/copy-url.js";

chrome.commands.onCommand.addListener(executeCommand);

async function executeCommand(command: string): Promise<void> {
    switch(command) {
        case "copy-url":
            await copyCurrentURL();
            return;
        
        default:
            console.warn("How did you get here what??? The block should only execute for registered commands wtf. Have a gold star I guess.");
    }
}