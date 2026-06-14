const STORAGE_KEY = "shortcut-settings";

async function getSettings(): Promise<Record<string, boolean>> {
    const commandStates: Record<string, Record<string, boolean>> = await chrome.storage.sync.get(STORAGE_KEY);
    return commandStates[STORAGE_KEY] ?? {};
}

async function updateSettings(commandName: string, state: boolean): Promise<void> {
    const settings = await getSettings();
    settings[commandName] = state;

    chrome.storage.sync.set({[STORAGE_KEY] : settings});
}