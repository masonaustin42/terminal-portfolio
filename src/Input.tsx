import React, { FC, useState } from "react";
import { command } from "./App";
import executeCommand from "./ExecCommand";

interface Props {
  output: command[];
  setOutput: React.Dispatch<React.SetStateAction<command[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  commandHistory: string[];
  setCommandHistory: React.Dispatch<React.SetStateAction<string[]>>;
  username: string;
  assignUsername: (name: string) => void;
}

const Input: FC<Props> = ({
  output,
  setOutput,
  input,
  setInput,
  commandHistory,
  setCommandHistory,
  username,
  assignUsername,
}) => {
  const [commandHistoryIndex, setCommandHistoryIndex] = useState(0);

  const commandInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.repeat) return;
    if (e.key === "ArrowUp") {
      if (commandHistoryIndex > 0) {
        setCommandHistoryIndex(commandHistoryIndex - 1);
        setInput(commandHistory[commandHistoryIndex]);
      } else {
        setCommandHistoryIndex(0);
        setInput(commandHistory[0] || "");
      }
    } else if (e.key === "ArrowDown") {
      if (commandHistory.length === 0 || commandHistory.length === 1) return;
      if (commandHistoryIndex <= commandHistory.length - 2) {
        setInput(commandHistory[commandHistoryIndex + 1]);
        setCommandHistoryIndex(commandHistoryIndex + 1);
      }
    } else if (e.key === "Enter") {
      const newCommandHistory = [...commandHistory, input];
      setCommandHistory(newCommandHistory);
      setCommandHistoryIndex(commandHistory.length);
      const newOutput = [...output];
      newOutput.push([true, input]);
      newOutput.push([false, executeCommand(input, assignUsername)]);
      if (input === "clear") setOutput([]);
      else setOutput(newOutput);
      setInput("");
    }
  };

  return (
    <>
      <p>
        <span style={{ color: "#16c60c" }}>{username}@mason-portfolio</span>
        <span style={{ color: "white" }}>:</span>
        <span style={{ color: "#376fea" }}>~</span>
        <span style={{ color: "white" }}>
          ${" "}
          <input
            id="command-input"
            type="text"
            autoFocus
            value={input}
            onKeyDown={commandInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
        </span>
      </p>
    </>
  );
};

export default Input;
