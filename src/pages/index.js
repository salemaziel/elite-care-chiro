import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Helmet } from 'react-helmet';
import HomePage from '../components/PageComponents/Home/HomePage'
import { Link } from 'gatsby'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="coronadiv2" >
          Important Message from Elite Care Chiropractic regarding COVID-19 (Novel Coronavirus) - <Link 
          to="/covid-19" 
          style={{
            textDecoration: 'underline', 
            cursor: 'pointer',
            color: 'white',
            fontWeight: '600',
          }}>
             Read More
          </Link>
        </div>
    <HomePage />
  </Layout>
);

export default IndexPage;
