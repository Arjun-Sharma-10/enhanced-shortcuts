export async function getActiveTab(): Promise<chrome.tabs.Tab> {
    let queryOptions: object = { active: true, lastFocusedWindow: true};
    const [activeTab]: chrome.tabs.Tab[] = await chrome.tabs.query(queryOptions);
    return activeTab!;
}