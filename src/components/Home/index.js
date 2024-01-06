import "./index.scss";
import logoD from "../../public/logo.svg.png";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["i", "m", "i", "t", "a", "r"];
  const jobArray = 'a junior software developer'.split(''); 

  useEffect(() => {
   setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6700)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br/>
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          &nbsp;
          <img className="logoImg" src={logoD} alt="logo"></img>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          ></AnimatedLetters>
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={23}
          ></AnimatedLetters>
         <span className={`${letterClass} _57`}>.</span>
        </h1>
        <h2>C# / JS / MSSQL / React</h2>
        <Link to="/contacts" className="contactBtn">
          CONTACT ME
        </Link>
      </div>
      <Logo></Logo>
    </div>
    <Loader type="pacman"></Loader>
    </>
  );
}
