import React from 'react'

import Banner from '../../banner'
import SideColumn from './SideColumn'
import MainSection from './MainSection'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const TreatmentsPage = () => (
<>
<Banner />
<Container>
<Row>
    <Col xs={4}>
    <SideColumn />
    </Col>
    <Col>
        <MainSection />
    </Col>
    </Row>
    </Container>
</>
)

export default TreatmentsPage