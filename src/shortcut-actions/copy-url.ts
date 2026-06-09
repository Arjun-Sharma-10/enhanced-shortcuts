import { getActiveTab } from "./utils.js";

export async function copyCurrentURL(): Promise<void> {
    const activeTab: chrome.tabs.Tab = await getActiveTab();

    chrome.scripting.executeScript({
        target: {tabId: activeTab.id!}, 
        func: (url: string) => {
            navigator.clipboard.writeText(url);
        },
        args: [activeTab.url!]
    });
}