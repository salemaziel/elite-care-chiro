import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faComment,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "gatsby";

import heroStyles from "./home.module.css";

const HeroMobile = () => (
  <>
    <div className={heroStyles.HeroMobile}>
      <Row>
        <Col>
          <h1 className={heroStyles.HeroTitle} >
            {" "}
            Welcome to
            <br />
            <span>Elite Care Chiropractic</span>{" "}
          </h1>
        </Col>
      </Row>
      <div style={{height: '100px', width: 'auto', margin: '50px auto', }} />
    </div>
  </>
);

export default HeroMobile;
