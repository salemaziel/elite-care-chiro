import React from 'react'
import { RoadRunners, Newton, Intraining, Multisports } from '../../../images/index'
import Col from 'react-bootstrap/Col'
import homeStyles from './home.module.css'


const Affiliates = () => (
<section className={homeStyles.AffilatesSection}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2>Our Affiliates</h2>
        <h3>We are proud to be the lead healthcare providers and supporters of the following organizations</h3>
      </div>
    </div>
    <div className="row">
      <Col md={4} className="top-margin">
        {/*<div className={homeStyles.AffiliatesLeftArrow}><span className="fa fa-angle-left" /></div>
        <div className={homeStyles.AffiliatesRightArrow}><span className="fa fa-angle-right" /></div>*/}
        <div className={homeStyles.AffiliatesSlider}>
          <div className={homeStyles.AffiliatesBox}> <img src={RoadRunners} className="img-fluid" /> </div>
          <div className={homeStyles.AffiliatesBox}> <img src={Intraining} className="img-fluid" /> </div>
          <div className={homeStyles.AffiliatesBox}> <img src={Newton} className="img-fluid" /> </div>
          <div className={homeStyles.AffiliatesBox}> <img src={Multisports} className="img-fluid" /> </div>
        </div>
      </Col>
    </div>
  </div>
</section>

)
export default Affiliates