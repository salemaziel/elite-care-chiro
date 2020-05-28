import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import { Medical } from '../../../images/index'
import { Link } from 'gatsby'

import '../../../images/index'
import homeStyles from "./home.module.css";

const MeetDoctor = () => (
<section className={homeStyles.MeetDoctorSection}>
  <Container>
    <div className="row d-flex flex-row">
      <div className="col-md-5 my-auto text-center">
        <div className={homeStyles.DoctorImage}> 
        <img src={Medical} className="img-fluid" /> </div>
      </div>
      <div className="col-md-7 my-auto">
        <div className={homeStyles.DoctorDetails}>
          <h2> Meet Your Doctor </h2>
          <h3>Dr. Linda Janelli, D.C.</h3>
          <p>Dr. Linda Jannelli is a graduate of Life Chiropractic College
              West, where she graduated Magna Cum Laude. </p>
            <Button as={Link} to="/about#janelli" rel="preload" className="blue-btns">Read More</Button> </div>
      </div>
    </div>
    <div className="row d-flex flex-row flex-row-reverse">
      <div className="col-md-5 my-auto text-center">
        <div className={homeStyles.DoctorImage}> 
        <img src={Medical} className="img-fluid" /> 
        </div>
      </div>
      <div className="col-md-7 my-auto">
        <div className={homeStyles.DoctorDetails}>
          <h2> Meet Your Doctor </h2>
          <h3>Dr. Rob Rich, D.C.</h3>
          <p>Rob Rich, D.C. is graduate of Life West Chiropractic College in 1993 and has been practicing in San Diego since 1994. </p>
            <Button as={Link} to="/about#rich" rel="preload" className="blue-btns">Read More</Button> </div>
      </div>
    </div>
  </Container>
</section>
);

export default MeetDoctor