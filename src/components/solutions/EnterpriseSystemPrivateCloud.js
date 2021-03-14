import React, { Component } from "react";
import Header from "../layout/Header";

export class EnterpriseSystemPrivateCloud extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="site-main">
        <Header />
        {/* page-title */}
        <div className="ttm-page-title-row">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12">
                {/* section title */}
                <div className="section-title text-center with-desc clearfix">
                  <div className="">
                    <h2 className="title">
                      <span>Enterprise System &amp; Private Cloud</span>
                      <br />
                      <span>Solution</span>
                    </h2>
                  </div>
                </div>
                {/* section title end */}
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* ttm-bgcolor-white */}
        <section
          className="ttm-row grid-section ttm-bgcolor-white clearfix"
          style={{ padding: "5px" }}
        >
          <div className="container-xl" style={{ alignItems: "center" }}>
            {/* row */}
            <div className="row">
              <div className="col-lg-2 col-md-6">
                {/* featured-imagebox-blog */}
                <div className="featured-imagebox featured-imagebox-blog mb-30">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                {/* featured-imagebox-blog */}
                <div className="featured-imagebox featured-imagebox-blog mb-30">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <a
                      href={"https://www.cisco.com/"}
                      title="MoonItZone"
                      rel="home"
                    >
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/GUic40I.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                {/* featured-imagebox-blog */}
                <div className="featured-imagebox featured-imagebox-blog mb-30">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <a
                      href={"https://www.cisco.com/"}
                      title="MoonItZone"
                      rel="home"
                    >
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/sVEKdLQ.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                {/* featured-imagebox-blog */}
                <div className="featured-imagebox featured-imagebox-blog mb-30">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <a
                      href={"https://www.cisco.com/"}
                      title="MoonItZone"
                      rel="home"
                    >
                      <img
                        className="img-fluid w-100"
                        src="https://i.imgur.com/sVEKdLQ.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                {/* featured-imagebox-blog */}
                <div className="featured-imagebox featured-imagebox-blog mb-30">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <a
                      href={"https://www.cisco.com/"}
                      title="MoonItZone"
                      rel="home"
                    >
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/sVEKdLQ.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default EnterpriseSystemPrivateCloud;
