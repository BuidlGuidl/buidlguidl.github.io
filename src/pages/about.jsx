import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

import { BackgroundImage } from 'atomic'

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <BackgroundImage />
        <About />
      </div>
    );
  }
}

export default AboutPage;
