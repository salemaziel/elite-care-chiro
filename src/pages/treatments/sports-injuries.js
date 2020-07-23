import React from 'react'
import SEO from "../../components/seo";

import Layout from '../../components/layout'
import ServicesPage from '../../components/PageComponents/Treatments/sportsInjuries/ServicesPage'
import { Helmet } from 'react-helmet'


const Services = () => (
    <Layout>
            <Helmet>
<script src="https://www.appointletcdn.com/loader/loader.min.js" async="" defer=""></script>
    </Helmet>
        <SEO title="Sports Injuries" />

        <ServicesPage />

    </Layout>
)

export default Services