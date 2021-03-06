import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


import { Link } from 'gatsby'

import homeStyles from "./home.module.css";

const DetailsTimeTableMobile = () => (
<div className="NoDesktop">
  <section className={homeStyles.CenterDetailsMobile}>
    <Container>
      <Row>
        <div className="col-md-12">
          <h2>Elite care chiropractic center</h2>
          <h3>is owned and managed by Linda Jannelli, D.C and Rob Rich. D.C</h3>
        </div>
      </Row>
    </Container>
  </section>
  <section className={homeStyles.TimeTable}>
    <Container>
      <Row>
        <div className="col-md-12">
          <div className={homeStyles.TimeTable}>
            {/*<div className="row d-flex flex-row">*/}
            <Row className={homeStyles.ReversedRow}>
              <Col>
                <div className={homeStyles.LeftDetails}>
                  <div className={homeStyles.AddressTitle}>
                    <h2 style={{textAlign: 'center', color: '#086788'}}>Suite 302</h2>
                    <h3 style={{textAlign: 'center', color: '#0397d7'}}>317 N El Camino Real, Encinitas, CA 92024</h3>
                  </div>
                  <table>
                    <tbody>
                      <tr>
                        <td>Monday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 9:00AM - 5:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Tuesday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 9:00AM - 5:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Wednesday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 9:00AM - 5:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 9:00AM - 5:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 9:00AM - 5:00PM </div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col>
                <div className={homeStyles.MapResponsive}>
                  <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=place_id:ChIJNT5NO48L3IARRWKVIPGczIo" frameBorder={0} style={{border: 0}} allowFullScreen />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
    </Container>
  </section>
</div>
)

export default DetailsTimeTableMobile