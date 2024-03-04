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
      if (commandHistoryIndex < commandHistory.length) {
        setInput(commandHistory[commandHistoryIndex]);
        setCommandHistoryIndex(commandHistoryIndex + 1);
      }
    }
    if (e.key === "ArrowDown") {
      if (commandHistoryIndex > 0) {
        setInput(commandHistory[commandHistoryIndex - 1]);
        setCommandHistoryIndex(commandHistoryIndex - 1);
      }
    }
    if (e.key === "Enter") {
      const newCommandHistory = [...commandHistory, input];
      setCommandHistory(newCommandHistory);
      setCommandHistoryIndex(commandHistory.length - 1);
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
