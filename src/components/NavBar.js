import { Link, navigateTo } from "gatsby";
import React from "react";
import SideNav from "react-simple-sidenav";

//import { Button, Navbar, Nav, NavItem, Container } from "react-bootstrap";
import navStyles from "./nav.module.css";
import { LogoLG } from "../images/index";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";

import NavDropdown from "react-bootstrap/NavDropdown";

//const NavBar = () => (
class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      showNav: false,
      title: "",
      items: "",
      openFromRight: "",
    };
  }
  render() {
    return (
      <>
        <Navbar
          bg="white"
          variant="light"
          expand="lg"
          /*fixed="top"*/ style={{
            position: "fixed",
            top: "-10px",
            right: "0",
            left: "0",
            zIndex: "5",
            border: "1px solid",
            borderColor: "rgba(0,0,0,0.05)",
            borderRadius: "5px",
          }}
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={LogoLG}
                alt="Elite Care Chiropractic Logo"
                className={navStyles.Logo}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => this.setState({ showNav: true })}
            />
            {/*<Navbar.Collapse id="basic-navbar-nav">*/}
            <div className={navStyles.NavBar}>
              <Nav
                className="mr-auto"
                defaultActiveKey="/"
                onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
              >
                <NavItem href="/about">
                  <Nav.Link as={Link} activeClassName="active" to="/about">
                    About
                  </Nav.Link>
                </NavItem>
                {/*  <NavItem href="/treatments">
                  <Nav.Link as={Link} activeClassName="active" to="/treatments">
                    Treatments
                  </Nav.Link>
        </NavItem> */}
                {/* <NavItem href="/services">
                  <Nav.Link as={Link} activeClassName="active" to="/services">
                    Services
                  </Nav.Link>
      </NavItem> */}
                <NavDropdown
                  as={Link}
                  href="/treatments"
                  to="/treatments"
                  eventKey="treatments"
                  title="Treatments"
                  id="nav-dropdown-treatments"
                >
                  <NavDropdown.Item eventKey="treatments/motor-vehicle-collision">
                    {" "}
                    Motor Vehicle Collision{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="treatments/neck-and-back-pain">
                    Neck and Back Pain
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="treatments/sports-injuries">
                    Sports Injuries
                  </NavDropdown.Item>
                  {/*   <NavDropdown.Item eventKey="treatments/#">
                    Physiotherapy Protocols{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="treatments/#">
                    Adjustive Technique{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="services/#">
                    Shingle{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="services/#">
                    Built-up Roofing BUR{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="services">
                    All Services
                  </NavDropdown.Item>*/}
                </NavDropdown>

                <NavDropdown
                  as={Link}
                  href="/services"
                  to="/services"
                  eventKey="services"
                  title="Services"
                  id="nav-dropdown-services"
                >
                  <NavDropdown.Item eventKey="services/gait-evaluation">
                    Gait Evaluation
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="services/orthotics">
                    Orthotics
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="services/myofascial-release">
                    {" "}
                    Myofascial Release{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="services/physiotherapy-protocols">
                    Physiotherapy Protocols{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="services/adjustive-technique">
                    Adjustive Technique{" "}
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item eventKey="services/#">
                    Shingle{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="services/#">
                    Built-up Roofing BUR{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="services">
                    All Services
                  </NavDropdown.Item>*/}
                </NavDropdown>

                <NavItem href="/newpatients">
                  <Nav.Link
                    as={Link}
                    activeClassName="active"
                    to="/newpatients"
                  >
                    New Patients
                  </Nav.Link>
                </NavItem>
              </Nav>
              <Nav className="ml-auto">
                {/*<NavItem href="/about">
        <Nav.Link as={Link} activeClassName="active" to="/about">
          About
        </Nav.Link>
      </NavItem>
      <NavItem href="/treatments">
        <Nav.Link as={Link} activeClassName="active" to="/treatments">
          Treatments
        </Nav.Link>
      </NavItem>
      <NavItem href="/services">
        <Nav.Link as={Link} activeClassName="active" to="/services">
          Services
        </Nav.Link>
      </NavItem>
      <NavItem href="/newpatients">
        <Nav.Link as={Link} activeClassName="active" to="/newpatients">
          New Patients
        </Nav.Link>
  </NavItem>*/}
                <Button
                  /*href="https://elite-care-chiropractic.appointlet.com/s/30-minute-appointment"*/
                  className={navStyles.NavBook}
                  data-appointlet-organization="elite-care-chiropractic"
                 /* onClick={() => navigateTo("/schedule")} */
                >
                  Schedule
                </Button>
              </Nav>
            </div>

            {/*</Navbar.Collapse>*/}
          </Container>
        </Navbar>
        <SideNav
          openFromRight={true}
          title={
            <div
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                height: "100px",
              }}
            >
              {/* <Link>
                <img src={LogoLG} width="100%" alt='' />
             </Link>*/}
            </div>
          }
          titleStyle={{
            background: "inherit",
            backgroundColor: "transparent",
            color: "black",
            width: "200px",
            margin: "auto",
          }}
          items={[
            <Link rel="preload" className={navStyles.SideNavLink} to="/">
              Home
            </Link>,
            <Link rel="preload" className={navStyles.SideNavLink} to="/about">
              About
            </Link>,
            <Link
              rel="preload"
              className={navStyles.SideNavLink}
              to="/services"
            >
              Services
            </Link>,
            <Link
              rel="preload"
              className={navStyles.SideNavLink}
              to="/treatments"
            >
              Treatments
            </Link>,

            <Link
              rel="preload"
              className={navStyles.SideNavLink}
              to="/newpatients"
            >
              New Patients
            </Link>,
            <Button
              className={navStyles.NavBook}
              data-appointlet-organization="elite-care-chiropractic"
             /* onClick={() => navigateTo("/schedule")}*/
            >
              Schedule
            </Button>,
          ]}
          itemStyle={{
            background: "inherit",
            backgroundColor: "inherit",
            color: "#fff",
            fontSize: "2rem",
            padding: "10px 0",
            textAlign: "center",
            margin: "1rem auto",
          }}
          navStyle={{
            width: "70%",
            background: "rgba(3,151,215,0.9)",
            color: "white!important",
          }}
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
      </>
    );
  }
}

export default NavBar;
