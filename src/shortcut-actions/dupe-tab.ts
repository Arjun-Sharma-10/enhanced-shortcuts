import { getActiveTab } from "./utils.js";

export async function dupeTab(): Promise<void> {
    const activeTab: chrome.tabs.Tab = await getActiveTab();

    chrome.tabs.duplicate(activeTab.id!);
}