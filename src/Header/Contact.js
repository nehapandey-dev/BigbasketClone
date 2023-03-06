import React from "react";
import Container from "react-bootstrap/Container";
import Navigationbar from "./Navbar";
import "./Header.css"
import { Link } from "react-router-dom";

import {
  BsFillTelephoneFill,
  BsFillGeoAltFill,
  BsPerson,
} from "react-icons/bs";


function Contact() {
  return (
    <>

      <Container className="contact">
        <Link to={'/contact-us'} style={{ textDecoration: 'none' }}><BsFillTelephoneFill />
          18601231000</Link>

        <Link to={'/location'} style={{ textDecoration: 'none' }}><BsFillGeoAltFill />
          560004,Bangalore</Link>
          
        <Link to={'/login/signup'} style={{ textDecoration: 'none' }}>
          <BsPerson />
          Login/Sign Up
        </Link>

      </Container>

      <Navigationbar />
    </>
  );
}

export default Contact;
