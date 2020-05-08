import React, { Component } from 'react';
import aboutStyle from "./about.module.css"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"


class AboutSectionParallax extends Component {
  render() {
    return (
      <>
        <section 
        className={aboutStyle.SectionParallax}>
          <Container>
            <Row>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="progress-box-layout1">
                  <div className="progress-content">
                    <div className="item-icon">
                      <i className="flaticon-apartment" />
                    </div>
                    <div className="item-content">
                      <div
                        className="counter count-number"
                        data-num={1050}
                      >
                        1050
                      </div>
                      <div className="count-title">
                        Residential Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="progress-box-layout1">
                  <div className="progress-content">
                    <div className="item-icon">
                      <i className="flaticon-industry" />
                    </div>
                    <div className="item-content">
                      <div
                        className="counter count-number"
                        data-num={1250}
                      >
                        1250
                      </div>
                      <div className="count-title">
                        Commertial Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="progress-box-layout1">
                  <div className="progress-content">
                    <div className="item-icon">
                      <i className="flaticon-helmet" />
                    </div>
                    <div className="item-content">
                      <div
                        className="counter count-number"
                        data-num={650}
                      >
                        650
                      </div>
                      <div className="count-title">
                        Hard Working People
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="progress-box-layout1">
                  <div className="progress-content">
                    <div className="item-icon">
                      <i className="flaticon-happy" />
                    </div>
                    <div className="item-content">
                      <div
                        className="counter count-number"
                        data-num={3659}
                      >
                        3659
                      </div>
                      <div className="count-title">
                        Our Satisfied Clinets
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default AboutSectionParallax
