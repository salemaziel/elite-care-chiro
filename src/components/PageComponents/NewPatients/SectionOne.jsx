import React from 'react'


import newpatientStyles from './newpatients.module.css'
import './newpatients.css'



const SectionOne = () => (
<section className="patient-section">
  <div className="auto-container">
    <div className="row clearfix">
      {/*Content Column*/}
      <div className="content-column col-lg-9 col-md-8 col-sm-12 col-xs-12">
        <div className="inner-column">
          <div className="sec-title">
            <h2>New patient paper work</h2>
          </div>
          <div className="bold-text">We offers our patient form(s) online so they can be finished it in the comfort of your own home or office.</div>
          <div className="text">magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
          <ul className="list-style-two">
            <li>All forms are PDF files. You will need AdobeReader to view them</li>
          </ul>
          <ul className="patient-list">
            <li><a href="#">Adult New Patient Paperwork</a></li>
          </ul>
        </div>
      </div>
      {/*Info Column*/}
      <div className="info-column col-lg-3 col-md-4 col-sm-8 col-xs-12">
        <div className="patient-box" style={{backgroundImage: 'url(images/resource/offer-1.jpg)'}}>
          <div className="inner-box">
            <h2>New patient</h2>
            <h3>Special Offer</h3>
            <div className="text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</div>
            <a href="#" className="theme-btn btn-style-seven">Click here</a>
          </div>
        </div>
        <h4>Contact Info</h4>
        <ul className="offer-list">
          <li>317 N El Camino Real, Encinitas, <br /> CA 92024</li>
          <li>Phone : 1-760-710-1901</li>
          <li>Email : info@elitecarechiropractic.com</li>
        </ul>
      </div>
    </div>
  </div>
</section>

)

export default SectionOne