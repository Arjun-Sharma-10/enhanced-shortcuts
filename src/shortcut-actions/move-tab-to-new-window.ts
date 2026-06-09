import { getActiveTab } from "./utils.js";

export async function tabWindow(): Promise<void> {
    const activeTab: chrome.tabs.Tab = await getActiveTab();
    
    chrome.windows.create({
        tabId: activeTab.id!,
    });
}