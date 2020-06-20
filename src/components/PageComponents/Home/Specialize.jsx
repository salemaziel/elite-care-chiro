import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

import { MotorVehicle, SportsInjury, NeckPain } from "../../../images/index";
import { Link } from "gatsby";

import homeStyles from "./home.module.css";

const Specialize = () => (
  <section className={homeStyles.SpecializeSection}>
    <Container>
      <Row>
        <div className="col-md-12">
          <h2>We Specialize in Treatment for:</h2>

        </div>
      </Row>
      <Row className={homeStyles.SpecializeTopMargin}>
       {/* <div className="col-md-3 col-sm-6"> */}
       <Col>
          <div className={homeStyles.SpecializeBox}>
            <Link to="/treatments/sports-inuries">
            <img src={SportsInjury} className="img-fluid" />
            <h4>
              Sports <br />
              Injuries
            </h4>
            </Link>
          </div>
          </Col>
        <Col>
          <div className={homeStyles.SpecializeBox}>
            <img src={NeckPain} className="img-fluid" />
            <h4>
              Neck and <br />
              Back Pain
              
            </h4>
          </div>
        </Col>
        <Col>
          <div className={homeStyles.SpecializeBox}>
            <img src={MotorVehicle} className="img-fluid" />
            <h4>
              Motor Vehicle <br />
              Collisions
            </h4>
          </div>
        </Col>
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
