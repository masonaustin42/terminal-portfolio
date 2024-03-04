import React, { useState, useEffect, FC } from "react";
import "./App.css";
import Output from "./Output";

const App: FC = () => {
  type command = [isCommandInput: boolean, string];
  const [output, setOutput] = useState([] as command[]);
  const [input, setInput] = useState("");
  const username = localStorage.getItem("username");

  const executeCommand = (command: string) => {
    const args = command.split(" ");
    switch (args[0]) {
      case "help":
        switch (args[1]) {
          case "about":
            return "about: prints a short description about me";
          case "setusername":
            return "setusername [username]: sets a username for the terminal";
          default:
            return "Available commands: about, contact, projects";
        }
      case "about":
        return "Hello! I'm Mason, a software developer from Seattle.";
      case "clear":
        setOutput([]);
        return "";
      case "setusername":
        localStorage.setItem("username", args[1]);
        return `Username set to ${args[1]}`;
      default:
        return "Command not found, please type 'help' for a list of available commands";
    }
  };

  useEffect(() => {
    const commandInput = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (e.key === "Enter") {
        console.log("enter", input);
        const newOutput = [...output];
        newOutput.push([true, input]);
        newOutput.push([false, executeCommand(input)]);
        setOutput(newOutput);
        // setInput("");
      }
    };
    document
      .getElementById("command-input")
      ?.addEventListener("keydown", commandInput);

    return () => {
      document
        .getElementById("command-input")
        ?.removeEventListener("keydown", commandInput);
    };
  }, [output]);

  return (
    <div className="App">
      <Output output={output} />
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
        </span>
      </p>
    </div>
  );
};

export default App;
