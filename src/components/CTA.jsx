import React from 'react'
import { Link } from 'gatsby'
import ctaStyles from './cta.module.css'

const CTA = () => (
    <section id="two" className={ctaStyles.cta}>
    <div className={ctaStyles.inner}>
      <header>
        <h2>Schedule Your Appointment Today</h2>

      </header>
      <ul className={ctaStyles.actions}>
          <li><Link to="#" data-appointlet-organization="elite-care-chiropractic" className="btn blue-btns">Book Online</Link></li>
</ul>
    </div>
  </section>
)

export default CTA