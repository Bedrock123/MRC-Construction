import React, { Component } from "react";
import DocumentTitle from "react-document-title";
// Base Comps
import Hero from "../components/Process/Hero";
import DesignBuild from "../components/Process/DesignBuild";
import TriplePlay from "../components/Process/TriplePlay";
import CharThing from "../components/Process/CharThing";
import Quote from "../components/About/Quote";
// Images
import OUTSIDE_OF_HOUSE from "../assets/images/Process/hero_2.png";

class Process extends Component {
  // About Screen https://projects.invisionapp.com/d/main#/console/15461363/321299148/inspect
  render() {
    return (
      <DocumentTitle
        title={
          "Design Build - Michael Robert Construction, Additions and Renovations, High End Remodeling, General Contractor"
        }
      >
        <div className="process-wrapper">
          <Hero />
          <CharThing />

          <DesignBuild />
          <div className="quote-container">
            <Quote
              quote={
                "Absolutely professional from beginning to end. The final product was outstanding, and the workmanship was excellent. "
              }
              speaker={"Jodie, Westfield"}
            />
          </div>
          <div
            className="bottom-hero"
            style={{ backgroundImage: "url(" + OUTSIDE_OF_HOUSE + ")" }}
          />
        </div>
      </DocumentTitle>
    );
  }
}

export default Process;
