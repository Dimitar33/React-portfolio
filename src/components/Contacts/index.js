import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Contacts() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  function sendEmail(ev) {
    ev.preventDefault();

    emailjs
      .sendForm(
        "service_jfolpx9",
        "template_80ri7y7",
        refForm.current,
        "CzCWITYKTdbC8yPLu"
      )
      .then(
        () => {
          alert("Message successfully sent");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  }

  return (
    <>
      <div className="container contacts-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={"contact me".split("")}
              letterClass={letterClass}
              idx={13}
            ></AnimatedLetters>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  ></input>
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="submitBtn"
                    value="SEND"
                  ></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Dimitar Petkov <br />
          Ireland, <br />
          Abington wood <br />
          Malahide <br />
          <a href="mailto:dimpetkov777@gmail.com">dimpetkov777@gmail.com</a>
        </div>
        <div className="map-wrap">
          <MapContainer center={[53.4455151, -6.1820769]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[53.4455151, -6.1820769]}>
              <Popup>
                Dimitar lives here, come over for a cup of coffee.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman"></Loader>
    </>
  );
}
