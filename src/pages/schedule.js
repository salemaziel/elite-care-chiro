import React from "react";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";
import Banner from "../components/banner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Schedule = () => (
  <Layout>
    <div style={{ height: "50px", width: "100%", margin: "auto", justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} />
    <Banner />
    <section style={{backgroundColor: 'blue'}}>
    <Container style={{ minHeight: "800px", width: "100%", margin: "auto", justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
      <Row style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
          {/*<iframe
            src="https://booking.appointy.com/salemaziel/?isGadget=1"
            width={800}
            height={760}
            frameBorder={0}
            style={{border: '0'}}
            scrolling="auto"
          />*/}

<iframe
            src="https://elite-care-chiropractic.appointlet.com"
            width="100%"
            height={1000}
            frameBorder={0}
            style={{border: '0'}}
            scrolling="auto"
          />
      </Row>
      <Row>


      </Row>
    </Container>
    </section>
  </Layout>
);

export default Schedule;