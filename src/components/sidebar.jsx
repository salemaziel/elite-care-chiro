import React from "react";
import { Link } from 'gatsby'
import ListGroup from 'react-bootstrap/ListGroup'

import sidebarStyles from "./PageComponents/Services/services.module.css";

function Sidebar(props) {
  return (
    <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
      <aside className={sidebarStyles.AsideCategories}>
        {/*Blog Category Widget*/}
        <div className={sidebarStyles.sidebarWidget}>
            <ListGroup as="ul" className={sidebarStyles.Categories} >
            {props.items.map((item, index) => (

              <ListGroup.Item as="li" className={sidebarStyles.active} active={true} key={index}>
                <Link to={item.navlink}>{item.serviceName}</Link>
              </ListGroup.Item>
                        ))}

            </ListGroup>
        </div>
        <div className={sidebarStyles.ListWidget}>
          <ul>
            <li>
              <span className="icon fa fa-phone" style={{ fontSize: "16px" }} />{" "}
              1-760-710-1901
            </li>
            <li>
              <span className="icon fa fa-send" style={{ fontSize: "16px" }} />{" "}
              info@elitecarechiropractic.com
            </li>
          </ul>
        </div>
      </aside>
              {/*<Sidebar
        items={[
          {
          navlink: "/services/adjustive-technique",
          serviceName: "Adjustive Technique",
          },
          {
          navlink: "/services/myofascial-release",
          serviceName: "Myofascial Release",
          },
          {
          navlink: "/treatments/motor-vehicle-collisions",
          serviceName: "Motor Vehicle Collisions",
          },
          {
          navlink: "/treatments/neck-and-back-pain",
          serviceName: "Neck and Back Pain",
          },
          {
          navlink: "/services/orthotics",
          serviceName: "Orthotics",
          },
          {
          navlink: "/services/physiotherapy-protocols",
          serviceName: "Physiotherapy Protocols",
          },
          {
          navlink: "/treatments/sports-injuries",
          serviceName: "Sports Injuries",
          },
                      
                
        ]} />*/}
    </div>
  );
}

export default Sidebar;
