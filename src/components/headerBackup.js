/*import { Link, navigateTo } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Button, Navbar, Nav, NavItem, Container } from "react-bootstrap";
import navStyles from './nav.module.css'

import { LogoLG } from '../images/index'
import NavMobile from './NavMobile'

const Header = ({ siteTitle }) => (
  <Container className={navStyles.daNav} position="fixed">
  <Navbar bg="white" variant="light" expand="lg" fixed="top">
    <Container>
    <Navbar.Brand as={Link} href="/">
      <img src={LogoLG} alt="Elite Care Chiropractic Logo"  className={navStyles.Logo}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => /*this.setState* /({ showNav: true })} />
    {/*<Navbar.Collapse id="basic-navbar-nav">* /}
    <div className={navStyles.NavBar}>
      <Nav className="mr-auto">
        <NavItem href="/about">
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
    </NavItem>* /}
        <Button className={navStyles.NavBook} onClick={() => navigateTo("/book")}>
          Schedule
        </Button>
      </Nav>
      </div>
      <NavMobile showNav={showNav} />
    {/*</Navbar.Collapse>* /}
    </Container>
  </Navbar>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
*/