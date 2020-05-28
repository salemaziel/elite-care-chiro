import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import HeroMobile from './HeroMobile'


import { Link } from 'gatsby'

import heroStyles from "./home.module.css";

const Hero = () => (
  <section class={heroStyles.HeroSection}>
    <Container className="NoMobile">
      <Row>
        <div className="col-lg-6 col-md-8">
          <h1>
            {" "}
            Welcome to
            <br />
            <span>Elite Care Chiropractic</span>{" "}
          </h1>
          <p>
           {" "}
          </p>
          <Button data-appointlet-organization="elite-care-chiropractic" as={Link} rel="preload" className="blue-btns">
            Book Online
          </Button>{" "}
        </div>
      </Row>
    </Container>
    <HeroMobile />
  </section>
);

export default Hero;
