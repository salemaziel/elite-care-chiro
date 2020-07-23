import React from 'react'

import Layout from '../components/layout'
import TreatmentsPage from '../components/PageComponents/Treatments/TreatmentsPage'
import SEO from "../components/seo";
import { Helmet } from 'react-helmet'


const Treatments = () => (
    <Layout>
            <Helmet>
<script src="https://www.appointletcdn.com/loader/loader.min.js" async="" defer=""></script>
    </Helmet>
            <SEO title="Treatments" />

        <TreatmentsPage />

    </Layout>
)

export default Treatments