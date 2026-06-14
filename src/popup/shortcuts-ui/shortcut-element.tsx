type Props = {
    command: chrome.commands.Command
};

export default function ShortcutElement({ command }: Props) {
    return (
        <div className = "card">
            <div className = "name">{command.description ?? "Unnamed Command"}</div>
            <div className = "shortcut">{command.shortcut ?? "Unassigned"}</div>
        </div>
    )
} 