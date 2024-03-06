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
          if (command[1] === "filmmakr") {
            return (
              <>
                <br />
                <p>
                  <a target="_blank" href="https://filmmakr.onrender.com/">
                    Filmmakr
                  </a>{" "}
                  is a portfolio hosting site inspired by Pixieset. It was made
                  using React, Redux, Flask, and PostgresSQL. It also integrates
                  AWS for image and video storage. It features a responsive
                  frontend, and a robust backend with a RESTful API.
                </p>
                <br />
                <p>
                  Filmmakr is a solo project that I completed as the capstone
                  project for App Academy. It was created in a single week. It
                  was a challenging project, but I learned a lot about how to
                  create a robust backend, and how to integrate AWS into a
                  project.
                </p>
                <br />
              </>
            );
          }
          if (command[1] === "savoryscoot") {
            return (
              <>
                <br />
                <p>
                  <a target="_blank" href="https://savoryscoot.onrender.com/">
                    Savory Scoot
                  </a>{" "}
                  is a clone of UberEats. It was built using React, Redux,
                  Express, and PostgresSQL. It features a robust backend with a
                  RESTful API, and a frontend that is responsive and intuitive.
                  It also features a map that displays the location of the user
                  and the location of the restaurant.
                </p>
                <br />
                <p>
                  Savory Scoot was created in a single week. It was a
                  collaborative effort between myself and three other
                  developers. We worked together to create a seamless user
                  experience, and a robust backend that could handle a large
                  amount of data.
                </p>
                <br />
              </>
            );
          }
          return command[1].split("\n").map((line, index) => {
            return <p key={index}>{line}</p>;
          });
        }
      })}
    </>
  );
};

export default Output;
