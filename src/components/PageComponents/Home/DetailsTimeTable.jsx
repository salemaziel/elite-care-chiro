import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


import { Link } from 'gatsby'

import homeStyles from "./home.module.css";

const DetailsTimeTable = () => (
<div className="NoMobile">
  <section className={homeStyles.CenterDetails}>
    <Container>
      <Row>
        <div className="col-md-12">
          <h2>Elite care chiropractic center</h2>
          <h3>is owned and managed by Linda jannelli, D.C and Rob Rich. D.C</h3>
        </div>
      </Row>
    </Container>
  </section>
  <section className={homeStyles.timetable}>
    <Container>
      <Row>
        <div className="col-md-12">
          <div className={homeStyles.TimeTable}>
            <div className="row d-flex flex-row">
              <div className="col-md-6 my-auto">
                <div className={homeStyles.LeftDetails}>
                  <table>
                    <tbody>
                      <tr>
                        <td>Monday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 8:30AM-12:00PM, 02:00PM-06:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Monday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 8:30AM-12:00PM, 02:00PM-06:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Monday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 8:30AM-12:00PM, 02:00PM-06:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Monday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 8:30AM-12:00PM, 02:00PM-06:00PM </div></td>
                      </tr>
                      <tr>
                        <td>Monday</td>
                        <td>:</td>
                        <td><div className={homeStyles.TableDetails}> 8:30AM-12:00PM, 02:00PM-06:00PM </div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6 my-auto">
                <div className={homeStyles.MapResponsive}>
                  <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" frameBorder={0} style={{border: 0}} allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </section>
</div>


)

export default DetailsTimeTable