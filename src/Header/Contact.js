import React from "react";
import Container from "react-bootstrap/Container";
import Navigationbar from "./Navbar";
import "./Header.css"

import {
  BsFillTelephoneFill,
  BsFillGeoAltFill,
  BsPerson,
} from "react-icons/bs";


function Contact() {
  return (
    <>
      <Container className="contact">

        <BsFillTelephoneFill />
        18601231000

        <BsFillGeoAltFill />
        560004,Bangalore

        <BsPerson />
        Login/Sign Up

      </Container>

      <Navigationbar />
    </>
  );
}

export default Contact;
