import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import craouselData from "./data/carouselData.js";

export default function Courses() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const coursesText = "the courses I have done so far.".split("");

  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []);

  return (
    <>
      <div className="container courses-page">
        {/* <div className="carousel-text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={coursesText}
              idx={15}
            ></AnimatedLetters>
          </h1>
        </div> */}
        <div className="carousel">
          <Slider {...settings}>
            {craouselData.map((slide, index) => {
              return (
                <div key={index}>
                  <img src={slide.image} alt={slide.alt} key={index} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  );
}
