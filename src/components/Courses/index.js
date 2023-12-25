import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";

export default function Courses() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const coursesText = "the courses I have done so far.".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []);

  return (
    <>
      <div className="container courses-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={coursesText}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <ul>
            <li>asdawdasfdawe</li>
          </ul>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  );
}
