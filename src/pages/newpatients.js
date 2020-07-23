import React from 'react'

import Layout from '../components/layout'
import NewPatientsPage from '../components/PageComponents/NewPatients/NewPatientsPage'
import SEO from "../components/seo";
import { Helmet } from 'react-helmet'


const Services = () => (
    <Layout>
            <Helmet>
<script src="https://www.appointletcdn.com/loader/loader.min.js" async="" defer=""></script>
    </Helmet>
            <SEO title="New Patients" />

        <NewPatientsPage />

    </Layout>
)

export default Services