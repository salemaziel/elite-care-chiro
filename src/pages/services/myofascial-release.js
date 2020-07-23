import React from 'react'

import Layout from '../../components/layout'
import ServicesPage from '../../components/PageComponents/Services/myofascialRelease/ServicesPage'
import SEO from "../../components/seo";
import { Helmet } from 'react-helmet'


const Services = () => (
    <Layout>    
            <Helmet>
<script src="https://www.appointletcdn.com/loader/loader.min.js" async="" defer=""></script>
    </Helmet>
            <SEO title="Myofascial Release" />

        <ServicesPage />

    </Layout>
)

export default Services