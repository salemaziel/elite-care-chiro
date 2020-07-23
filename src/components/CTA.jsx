import React from "react";

import Button from 'react-bootstrap/Button'
import { navigateTo, Link } from 'gatsby'
import ScheduleModal from "./ScheduleModal";
import { FaCalendarAlt } from "react-icons/fa";
import ctaStyles from "./cta.module.css";
import { Helmet } from 'react-helmet'


const CTA = () => (
  <>
  <Helmet>
  <script src="https://www.appointletcdn.com/loader/loader.min.js" async="" defer=""></script>
  </Helmet>

  <section id="two" className={ctaStyles.cta}>
    <div className={ctaStyles.inner}>
      <header>
        <h2>Schedule Your Appointment Today</h2>
      </header>
      <div style={{marginLeft: '10%'}}>
      {/*<ScheduleModal />* /}
      <CTAButtons
      buttonColor="success"
      size="lg"
      className={ctaStyles.containCalendar}
      buttonText={[
        <FaCalendarAlt className={heroStyles.CTACalendar} />
    ]}
      onClick=""
  ></CTAButtons>*/}
          <Button as={Link} /*to="/book-online"*/ data-appointlet-organization="elite-care-chiropractic"
          className="blue-btns btn btn-primary"
          type="button"
          /*onClick={this.handleModalOpen}*/
          /*onClick={() => navigateTo("/book-online")}*/
        >
          Book Online
        </Button>
      </div>
    </div>
  </section>

  </>
);

export default CTA;
