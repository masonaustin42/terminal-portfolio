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
          if (command[1] === "default") {
            return (
              <>
                <p>Welcome to Mason Austin's portfolio!</p>
                <p>Type "help" for a list of available commands</p>
                <p>
                  If you prefer a more traditional and visual portfolio
                  experience, enter "visual" or{" "}
                  <a target="_blank" href="https://masonaustin42.github.io/">
                    click here
                  </a>
                </p>
              </>
            );
          }
          if (command[1] === "about") {
            return (
              <>
                <br />
                <p>
                  Hello! I'm Mason, a software engineer based in Seattle,
                  Washington. I was born and raised as a musician, playing the
                  piano since I can remember. My journey after high school led
                  me to pursue Audio Engineering at the University of
                  Washington, delving into the intricate world of sound. After
                  that I transitioned into the role of an Electrician and Audio
                  Visual Technician, honing my skills in speaker installations,
                  TV setups, and intricate cable work. I was then promoted to
                  the role of programming and fine-tuning audio DSP systems,
                  configuring AV networks, and delving into lua scripting.
                  Scripting was my favorite part of this promotion, although it
                  unfortunately wasn't the focal point of my job.
                </p>
                <br />
                <p>
                  Seeking a more code-centric environment, I made the leap to
                  App Academy, a 6 month coding boot camp. Here, I engaged in
                  diverse projects, among them a collaborative effort involving
                  the development of an UberEats clone. Our team, comprising
                  myself and three peers, crafted a responsive web application
                  using React for the frontend, Flask to power the backend, and
                  leveraged PostGres for a robust restaurant database.
                  Additionally, we seamlessly integrated AWS for efficient
                  storage of restaurant and food item images.
                </p>
                <br />
                <p>
                  The experience of collaborating within my cohort and
                  witnessing the rapid deployment of a feature-rich web app
                  within a week was immensely gratifying. It's these experiences
                  that fuel my pride in the contributions I make to impactful
                  projects.
                </p>
                <br />
              </>
            );
          }
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
