import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faComment,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
*/
import { FaPhoneAlt, FaComment, FaCalendar } from "react-icons/fa";

import { Link } from "gatsby";

import heroStyles from "./home.module.css";
import CTAScheduleModal from "../../CTAScheduleModal";

const HeroMobileCTA = () => (
  <section>
    <Row className={heroStyles.HeroMobileCTA}>
      <Col>
        <a href="tel:1-760-710-1901" className={heroStyles.CTALink}>
          {/*<FontAwesomeIcon
              icon={faPhoneAlt}
              className={heroStyles.CTACall}
           
            />*/}
          <FaPhoneAlt className={heroStyles.CTACall} />
          Call
        </a>
      </Col>
      <Col>
        <a href="sms:1-760-710-1901" className={heroStyles.CTALink}>
          {/*<FontAwesomeIcon
              icon={faComment}
              className={heroStyles.CTAMessage}
              
            />*/}
          <FaComment className={heroStyles.CTAMessage} />
          Message
        </a>
      </Col>
      <Col>
        {/*<a as={Button} className={heroStyles.CTALink} data-appointlet-organization="elite-care-chiropractic">
            <FontAwesomeIcon
              icon={faCalendar}
              className={heroStyles.CTASchedule}
               
            />
            Book Online
</a>*/}
        <CTAScheduleModal />
      </Col>
    </Row>
  </section>
);

export default HeroMobileCTA;
