import { FC } from "react";

interface Output {
  output: [isCommandInput: boolean, string][];
}

const Output: FC<Output> = ({ output }) => {
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
          return <p key={index}>{command[1]}</p>;
        }
      })}
    </>
  );
};

export default Output;
