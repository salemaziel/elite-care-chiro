import React from 'react'

import Layout from '../../components/layout'
import ServicesPage from '../../components/PageComponents/Services/adjustiveTechnique/ServicesPage'
import SEO from "../../components/seo";
import { Helmet } from 'react-helmet'


const AdjustiveTechnique = () => (
    <Layout>
            <Helmet>
<script src="https://www.appointletcdn.com/loader/loader.min.js" async="" defer=""></script>
    </Helmet>
                <SEO title="Adjustive Technique" />

        <ServicesPage />

    </Layout>
)

export default AdjustiveTechnique