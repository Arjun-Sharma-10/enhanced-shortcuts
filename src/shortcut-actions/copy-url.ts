export async function copyCurrentURL(): Promise<void> {
    let queryOptions: object = { active: true, lastFocusedWindow: true};
    const [activeTab]: chrome.tabs.Tab[] = await chrome.tabs.query(queryOptions);
    
    const url: string | undefined = activeTab?.url;
    const id: number | undefined = activeTab?.id;

    if(typeof url == "undefined" || typeof id == "undefined") {
        return;
    }

    console.log(url);
    console.log(id);

    chrome.scripting.executeScript({
        target: {tabId: id}, 
        func: (url: string) => {
            navigator.clipboard.writeText(url);
            // console.log(`is the copy the issue? ${url}`);
        },
        args: [url]
    });
}