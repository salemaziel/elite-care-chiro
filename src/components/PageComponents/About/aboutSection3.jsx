import React, { Component } from "react"

import { 
  WomanOnTrack,

 } from "../../../images/index"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import aboutStyle from "./about.module.css"

class AboutSection3 extends Component {
  render() {
    return (
      <>
        <section className={aboutStyle.Section}>
          <Container>
              <Row className={aboutStyle.Titlerow}>
              <Col>
                <div className={aboutStyle.Box}>
                  <div className={aboutStyle.BoxImg}>
                    <img src={WomanOnTrack} alt="why choose" className="img-fluid" />
                  </div>
                  </div>
                  </Col>
                  
                <Col>
              <div className={aboutStyle.Header}>
                    <h3 className={aboutStyle.Subtitles}>
                    Highest Quality Care
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className={aboutStyle.Titlerow}>
              
                <Col className={aboutStyle.Nomobile}>
              <div className={aboutStyle.Header}>
                    
                  <h3 className={aboutStyle.Subtitles}> Patient Centered Treatment
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                  </div>
                </Col>

                <Col>
              <div className={aboutStyle.Box}>
              <div className={aboutStyle.BoxImg}>
                    <img src={WomanOnTrack} alt="why choose" className="img-fluid" />
                  </div>
                  </div>
                  </Col>

                  <Col className={aboutStyle.Nodesktop}>
              <div className={aboutStyle.Header}>
                    
                  <h3 className={aboutStyle.Subtitles}>    Commitment to Quality
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                  </div>
                </Col>
                  
              </Row>
              <Row className={aboutStyle.Titlerow}>
              <Col>
              <div className={aboutStyle.Box}>
              <div className={aboutStyle.BoxImg}>
                    <img src={WomanOnTrack} alt="why choose" className="img-fluid" />
                  </div>
                  </div>
                  </Col>
                <Col>
              <div className={aboutStyle.Header}>
                    <h3 className={aboutStyle.Subtitles}>
                      
                      Core Values
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      </p>
                </div>
                </Col>
              </Row>
          </Container>
        </section>
      </>
    )
  }
}

export default AboutSection3
