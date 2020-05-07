import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import { OldCouple } from '../../../images/index'
import { Link } from 'gatsby'

import '../../../images/index'
import homeStyles from "./home.module.css";

const MeetDoctor = () => (
<section className={homeStyles.MeetDoctorSection}>
  <Container>
    <div className="row d-flex flex-row">
      <div className="col-md-5 my-auto text-center">
        <div className={homeStyles.DoctorImage}> 
        <img src={OldCouple} className="img-fluid" /> </div>
      </div>
      <div className="col-md-7 my-auto">
        <div className={homeStyles.DoctorDetails}>
          <h2> Meet your Doctor </h2>
          <h3>Dr. Rob Rich, D.C.</h3>
          <p>Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum 
            Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum </p>
            <Button as={Link} to="/aboutus" rel="preload" className="blue-btns">Read More</Button> </div>
      </div>
    </div>
    <div className="row d-flex flex-row flex-row-reverse">
      <div className="col-md-5 my-auto text-center">
        <div className={homeStyles.DoctorImage}> 
        <img src={OldCouple} className="img-fluid" /> 
        </div>
      </div>
      <div className="col-md-7 my-auto">
        <div className={homeStyles.DoctorDetails}>
          <h2> Meet your Doctor </h2>
          <h3>Dr. Rob Rich, D.C.</h3>
          <p>Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum 
            Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum </p>
            <Button as={Link} to="/aboutus" rel="preload" className="blue-btns">Read More</Button> </div>
      </div>
    </div>
  </Container>
</section>
);

export default MeetDoctor