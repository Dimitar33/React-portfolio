import "./index.scss";
import csharp from "../../public/c--4.svg";
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
import { Link } from "react-router-dom";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

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
              strArray={"about me".split("")}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <p>
            I started learning computer science june 2020. Since then I haven't
            stoped. I've done nunerous{" "}
            <Link className="link" to={"/courses"}>
              courses
            </Link>{" "}
            and
            <Link className="link" to={"/projects"}>
              {" "}
              course projects
            </Link>
            , starting with C# then MS SQL, JS, HTML, CSS, React and currently
            I'm studying cyber security. I just want to know it all :)
          </p>
          <p>
            Although I don't have work experience in the IT field yet I have
            learned a lot over the last few years and I am confident that I will
            become a valuable member of any team.
          </p>
          <p>
            If I have to describe myself in a few words I'd say I am a positive
            and qurious person always trying to learn something new. In my free
            time I like to play video games and have a laugh with me friends.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={csharp}></img>
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
            <FontAwesomeIcon icon={faDatabase} color="#EC4D28"></FontAwesomeIcon>
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
