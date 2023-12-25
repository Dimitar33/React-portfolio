import "./index.scss";
import csharp from '../../public/c--4.svg';
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'about me'.split('')}
            idx={15}
          ></AnimatedLetters>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
           <img  src={csharp}></img>
            {/* <i class="fa fa-csharp" color="#DD0031"></i> */}
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#F06529"></FontAwesomeIcon>
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#28A4D9"></FontAwesomeIcon>
          </div>
          <div className="face4">
            <FontAwesomeIcon
              icon={faJsSquare}
              color="#5ED4F4"
            ></FontAwesomeIcon>
          </div>
          <div className="face5">
            <i class="fa fa-mysql"></i>
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faHtml5} color="#EC4D28"></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman"></Loader>
    </>
  );
}
