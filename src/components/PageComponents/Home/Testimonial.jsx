import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"

import { OldCouple } from "../../../images/index";

import { Link } from "gatsby";

import homeStyles from "./home.module.css";

const Testimonial = () => (
  <section className={homeStyles.SucessSection}>
    <Container>
      <Row>
        <div className="col-md-12">
          <h2>See What Our Clients Are Saying</h2>
          <h3>

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
                    I have made a living as a professional athlete for over two decades. Training and racing has always been the easy and passionate part of my career. Part of that training was always being at optimal physical health and balance. Dr Jannelli and Dr Rich have been the quiet pillars of strength and foundation that have guided my career through the flawless record setting seasons and the inevitable injuries along the way.<br />
                    <strong>
                    Thank-you for all those magnificent years, and for keeping me on the road and trails to continue to pursue my passion of health and fitness for the future.{" "}
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
