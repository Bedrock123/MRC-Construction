import React, { Component } from "react";
import DocumentTitle from "react-document-title";
// Base Comps
import Gallery from "../components/About/Gallery";
import InfoBar from "../components/Contact/InfoBar";
import Quote from "../components/About/Quote";
import ContactForm from "../components/Contact/ContactForm";
import Image_013 from "../assets/images/About/Gallery/171127-EM_Workspace_013.jpg";


class Contact extends Component {
  // About Screen https://projects.invisionapp.com/d/main#/console/15461363/321299148/inspect
  renderStaticImage() {
    return (
      <div className="gallery-secion">
        <div
            className="gallery-image-open"
            style={{
              background:
                " linear-gradient(to top, rgba(4, 0, 0, 0.2), transparent,  transparent, transparent), url(" +
                Image_013 +
                ")"
            }}
        />
    </div>
    );
  }

  render() {
    return (
      <DocumentTitle
        title={
          "Contact - Michael Robert Construction, Remodeling, Home Construction NJ, Home Remodeling NJ, General Contractor"
        }
      >
        <div className="about-wrapper contact-wrapper">
          <div className="hero-title-wrapper">
            <h2>FIND US</h2>
            <h1>CONTACT</h1>
          </div>
          <div className="gallery-wrapper">
            {/* <Gallery /> */}
            {this.renderStaticImage()}
            <InfoBar />
          </div>
          
          <ContactForm />

          <div className="quote-container">
            <Quote
              quote={
                "We couldn't be happier with the results. I wouldn't hesitate to partner with this firm. You will have the confidence to know that things are being built to last. "
              }
              speaker={"Marc, Westfield"}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Contact;
