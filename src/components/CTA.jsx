import React from "react";
import { Link } from "gatsby";
import ctaStyles from "./cta.module.css";

import ScheduleModal from "./ScheduleModal";

const CTA = () => (
  <section id="two" className={ctaStyles.cta}>
    <div className={ctaStyles.inner}>
      <header>
        <h2>Schedule Your Appointment Today</h2>
      </header>
      <div style={{marginLeft: '10%'}}>
      <ScheduleModal />
      </div>
    </div>
  </section>
);

export default CTA;
