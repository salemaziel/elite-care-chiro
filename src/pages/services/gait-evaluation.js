import React from 'react'

import Layout from '../../components/layout'
import ServicesPage from '../../components/PageComponents/Services/gaitEvaluation/ServicesPage'
import SEO from "../../components/seo";
import { Helmet } from 'react-helmet'


const GaitEvaluation = () => (
    <Layout>
            <Helmet>
<script src="https://www.appointletcdn.com/loader/loader.min.js" async="" defer=""></script>
    </Helmet>
                <SEO title="Gait Evaluation" />
        <ServicesPage />

    </Layout>
)

export default GaitEvaluation