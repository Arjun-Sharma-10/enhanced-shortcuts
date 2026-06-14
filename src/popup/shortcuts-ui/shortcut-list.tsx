import ShortcutElement from "./shortcut-element";

type Props = {
    commands: chrome.commands.Command[]
};

export default function CreateList({ commands }: Props) {
    return (
        <>
            {commands.map(command => (
                <ShortcutElement
                    key = {command.name}
                    command = {command}
                />
            ))}
        </>
    )
} 