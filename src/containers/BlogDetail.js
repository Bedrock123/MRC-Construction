import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { Row, Col } from "antd";
import Arrow_Button from "../assets/images/Common/scroll_down_arrow.svg";
import RecentlyAdded from "../components/Blog/RecentlyAdded";
import BackAndForth from "../components/Blog/BackAndForth";

var showdown = require("showdown");
var contentful = require("contentful");

class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { post: null, entries: null, allEntries: null };
  }

  client = contentful.createClient({
    space: "490ezzr1f96l",
    accessToken:
      "8e9529f53ad5d25dfe6af8cf4541e10358877acb64a2945cc9898851b36696bb"
  });
  componentWillMount() {
    var that = this;
    this.client
      .getEntries({
        content_type: "blogPost",
        "sys.id": this.props.match.params.id,
        include: 2
      })
      .then(function(project) {
        that.setState({ post: project.items[0] });
      });
    this.client
      .getEntries({
        content_type: "blogPost",
        order: "fields.publishDate",
        limit: 5
      })
      .then(function(entries) {
        that.setState({ entries: entries.items });
      });
    this.client
      .getEntries({
        content_type: "blogPost",
        order: "fields.publishDate"
      })
      .then(function(entries) {
        that.setState({ allEntries: entries.items });
      });
  }
  scrollDown() {
    window.scroll({
      top: 850,
      left: 0,
      behavior: "smooth"
    });
  }
  converter = new showdown.Converter();
  render() {
    if (this.state.post) {
      return (
        <DocumentTitle
          title={
            this.state.post.fields.title + " | Michael Robert Construction"
          }
        >
          <div className="blog-detail-wrapper">
            <div
              className="blog-header"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(51,51,51,0.9),    rgba(51,51,51,0.1)), url(" +
                  this.state.post.fields.coverPhoto.fields.file.url +
                  "?w=1920&fm=jpg&q=90&fit=fill&fl=progressive)"
              }}
            >
              <div className="arrow-button" onClick={() => this.scrollDown()}>
                <img src={Arrow_Button} alt="Arrow Button" />
              </div>
              <div className="title-content">
                <div className="title-content-inner">
                  <h3>{this.state.post.fields.category}</h3>
                  <h1>{this.state.post.fields.title}</h1>
                </div>
              </div>
            </div>
            <div className="blog-content-wrapper">
              <Row gutter={16}>
                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }}>
                  <div className="description">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.converter.makeHtml(
                          this.state.post.fields.content
                        )
                      }}
                    />
                  </div>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
                  <RecentlyAdded entries={this.state.entries} />
                </Col>
              </Row>
            </div>
            <BackAndForth
              entries={this.state.allEntries}
              post={this.state.post}
            />
          </div>
        </DocumentTitle>
      );
    } else {
      return (
        <DocumentTitle title={"MRC"}>
          <div
            className="about-wrapper portfolio-detail-wrapper"
            style={{ minHeight: "100vh" }}
          />
        </DocumentTitle>
      );
    }
  }
}

export default BlogDetail;
