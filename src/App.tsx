import { useState, FC } from "react";
import "./App.css";
import Output from "./Output";
import Input from "./Input";

type command = [isCommandInput: boolean, string];
export type { command };
const App: FC = () => {
  const defaultCommand = [
    false,
    `Welcome to Mason Austin's portfolio!
    Type 'help' for a list of available commands`,
  ];
  const [output, setOutput] = useState([defaultCommand] as command[]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([] as string[]);
  const user = window.localStorage.getItem("username") || "newuser";
  const [username, setUsername] = useState(user);

  const assignUsername = (name: string): void => {
    setUsername(name);
    window.localStorage.setItem("username", name);
  };

  return (
    <div
      className="App"
      id="App"
      onClickCapture={() => {
        const input = document.getElementById("command-input");
        if (input) {
          input.focus();
        }
      }}
    >
      <Output output={output} />
      <Input
        output={output}
        setOutput={setOutput}
        input={input}
        setInput={setInput}
        commandHistory={commandHistory}
        setCommandHistory={setCommandHistory}
        username={username}
        assignUsername={assignUsername}
      />
    </div>
  );
};

export default App;
