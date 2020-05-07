import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

import { MotorVehicle } from "../../../images/index";
import { Link } from "gatsby";

import homeStyles from "./home.module.css";

const Specialize = () => (
  <section className={homeStyles.SpecializeSection}>
    <Container>
      <Row>
        <div className="col-md-12">
          <h2>At elite care Chiropractic</h2>
          <h3>
            We are proud to be the lead healthcare providers and supporters of
            the following organization
          </h3>
        </div>
      </Row>
      <Row className={homeStyles.SpecializeTopMargin}>
        <div className="col-md-3 col-sm-6">
          <div className={homeStyles.SpecializeBox}>
            <img src={MotorVehicle} className="img-fluid" />
            <h4>
              Gait
              <br />
              Evaluation
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className={homeStyles.SpecializeBox}>
            <img src={MotorVehicle} className="img-fluid" />
            <h4>
              Gait
              <br />
              Evaluation
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className={homeStyles.SpecializeBox}>
            <img src={MotorVehicle} className="img-fluid" />
            <h4>
              Gait
              <br />
              Evaluation
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className={homeStyles.SpecializeBox}>
            <img src={MotorVehicle} className="img-fluid" />
            <h4>
              Gait
              <br />
              Evaluation
            </h4>
          </div>
        </div>
      </Row>
      <Row>
        <div className="col-md-12 text-center">
          {" "}
          <Button as={Link} to="/services" rel="preload" className="blue-btns">
            More Services
          </Button>{" "}
        </div>
      </Row>
    </Container>
  </section>
);

export default Specialize;
