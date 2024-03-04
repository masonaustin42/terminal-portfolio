import { FC } from "react";
import { command } from "./App";

interface Props {
  output: command[];
}

const Output: FC<Props> = ({ output }) => {
  const username = localStorage.getItem("username");

  return (
    <>
      {output.map((command, index) => {
        if (command[0] === true) {
          return (
            <p key={index}>
              <span style={{ color: "#16c60c" }}>
                {username}@mason-portfolio
              </span>
              <span style={{ color: "white" }}>:</span>
              <span style={{ color: "#376fea" }}>~</span>
              <span style={{ color: "white" }}>$ {command[1]}</span>
            </p>
          );
        } else {
          if (command[1] === "") return null;
          if (command[1] === "contact-info")
            return (
              <>
                <p>Click on a link or type a link to open it in a new window</p>
                <p>
                  Email:{" "}
                  <a href="mailto:masonaustin42@gmail.com" target="_blank">
                    masonaustin42@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:360-328-4137" target="_blank">
                    360-328-4137
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/mason-austin-a1b568240/"
                    target="_blank"
                  >
                    masonaustin42
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href="https://www.github.com/masonaustin42"
                    target="_blank"
                  >
                    masonaustin42
                  </a>
                </p>
              </>
            );
          return command[1].split("\n").map((line, index) => {
            return <p key={index}>{line}</p>;
          });
        }
      })}
    </>
  );
};

export default Output;
