import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";

export default function Projects() {
    
  const [letterClass, setLetterClass] = useState("text-animate");
  const projectsText = "check out my projects".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectsText}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <ul>
            <li>
              <i></i>
            </li>
          </ul>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  );
}
