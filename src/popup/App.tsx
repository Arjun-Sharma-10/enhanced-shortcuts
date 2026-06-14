import { useEffect, useState } from "react";
import CreateList from "./shortcuts-ui/shortcut-list";
import "./App.css";

export default function App() {
    const [commands, setCommands] = useState<chrome.commands.Command[]>([]);

    function updateComponents() {
        chrome.commands.getAll((newCommands) => setCommands(newCommands.splice(1)));
    }

    useEffect(updateComponents, []);

    return (
        <>
            <h2>Shortcuts</h2>

            <div id = "command-list">
                <CreateList 
                    commands={commands}
                />
            </div>
        </>
    );
}