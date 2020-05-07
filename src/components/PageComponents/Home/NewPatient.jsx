import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"


import { Link } from 'gatsby'

import homeStyles from "./home.module.css";

const NewPatient = () => (

<section className={homeStyles.NewPatientSection}>
  <Container>
    <div className="row d-flex flex-row">
      <div className="col-md-6 my-auto">
        <h1> New Patient Center </h1>
        <p>Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum 
          Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum Lorem Ipesum </p>
      </div>
      <div className="col-md-6 my-auto text-center">
         <Button as={Link} to="/newpatients" rel="preload" className="blue-btns">New Patient Forms</Button> </div>
    </div>
  </Container>
</section>

);

export default NewPatient