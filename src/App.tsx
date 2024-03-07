import { useState, FC } from "react";
import "./App.css";
import Output from "./Output";
import Input from "./Input";

type command = [isCommandInput: boolean, string];
export type { command };
const App: FC = () => {
  const defaultCommand = [false, `default`];
  const [output, setOutput] = useState([defaultCommand] as command[]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([] as string[]);
  let user = window.localStorage.getItem("username");
  if (user === null) {
    window.localStorage.setItem("username", "newuser");
    user = "newuser";
  }
  const [username, setUsername] = useState(user);

  const assignUsername = (name: string): void => {
    setUsername(name);
    window.localStorage.setItem("username", name);
  };

  return (
    <div
      id="click-capture"
      onClickCapture={() => {
        const input = document.getElementById("command-input");
        if (input) {
          input.focus();
        }
      }}
    >
      <div className="App" id="App">
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
    </div>
  );
};

export default App;
