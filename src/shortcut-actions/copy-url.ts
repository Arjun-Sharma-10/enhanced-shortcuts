export async function copyCurrentURL(): Promise<void> {
    let queryOptions: object = { active: true, lastFocusedWindow: true};
    const [activeTab]: chrome.tabs.Tab[] = await chrome.tabs.query(queryOptions);
    
    if(!activeTab?.url) {
        return;
    }

    console.log(activeTab.url);
    // await navigator.clipboard.writeText(tab.url);
}