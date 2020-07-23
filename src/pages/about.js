import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import AboutPage from '../components/PageComponents/About/aboutPage'

import { Helmet } from 'react-helmet'


const About = () => (
  <Layout>
        <Helmet>
<script src="https://www.appointletcdn.com/loader/loader.min.js" async="" defer=""></script>
    </Helmet>
    <SEO title="About" />
    <AboutPage />
  </Layout>
);

export default About;
