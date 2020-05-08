import React, { Component } from 'react';



import AboutHeader from './aboutheader'
import AboutSection1 from './aboutSection1';
import AboutSection3 from './aboutSection3';

//import ActionBanner2 from './actionBanner2'

import aboutStyle from './about.module.css'
import Banner from '../../banner'

import AboutDoctors from './AboutDoctors'

class AboutPage extends Component {
    render() {
    return (
        <>
        <Banner />
        <AboutDoctors />
       
        
      
      </>
    );
  }
}

export default AboutPage

