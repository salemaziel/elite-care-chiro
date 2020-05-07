import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

import { OldCouple } from "../../../images/index";

import { Link } from "gatsby";

import homeStyles from "./home.module.css";

const Testimonial = () => (
  <section class={homeStyles.SucessSection}>
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
      <Row>
        <div className="col-md-12">
          <div className={homeStyles.SuccessBox}>
            <div className="row d-flex flex-row">
              <div className="col-md-5">
                <div className={homeStyles.LeftImage}>
                  <img src={OldCouple} className="img-fluid" />
                </div>
              </div>
              <div className="col-md-7 my-auto">
                <div className={homeStyles.TextBox}>
                  <p>
                    {" "}
                    Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem
                    Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum
                    Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem
                    Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum
                    Lorem Ipesum <br />
                    <strong>
                      Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem
                      Ipesum{" "}
                    </strong>{" "}
                  </p>
                  <h4>
                    Paula Newby-Fraser <span>8X Ironman Work Champion</span>
                  </h4>
                  <div className="cx_star">
                    {" "}
                    <span className="fa fa-star" />{" "}
                    <span className="fa fa-star" />{" "}
                    <span className="fa fa-star" />{" "}
                    <span className="fa fa-star" />{" "}
                    <span className="fa fa-star" />{" "}
                  </div>
                  <Button as={Link} to="/services" rel="preload" className="blue-btns">
                    More Stories
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </section>
);

export default Testimonial;
