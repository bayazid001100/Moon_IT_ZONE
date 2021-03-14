import React, { Component } from "react";
import Header from "../layout/Header";

export class TrainingList3 extends Component {
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
                    <h2 className="title">Trainings &amp; Certifications</h2>
                  </div>
                </div>
                {/* section title end */}
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        <section className="ttm-row grid-section ttm-bgcolor-grey clearfix">
          <div className="container-xl">
            {/* row */}
            <div className="row">
              <div className="col-lg-4 col-md-6">
                {/* featured-imagebox-blog */}
                <div className="featured-imagebox featured-imagebox-blog mb-30">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/L5qw1JW.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/Juniper-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Juniper-training"}>
                          Juniper
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-blog end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* featured-imagebox-blog */}
                <div className="featured-imagebox featured-imagebox-blog mb-30">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/NWE3mVw.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/PLCHMI-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/PLCHMI-training"}>
                          PLC-HMI
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-blog end */}
              </div>
            </div>
            {/* row end */}
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="ttm-pagination">
                  <a
                    className="next page-numbers"
                    href={process.env.PUBLIC_URL + "/training_list2"}
                  >
                    <i className="ti ti-arrow-left" />
                  </a>
                  <a
                    className="page-numbers "
                    href={process.env.PUBLIC_URL + "/training_list1"}
                  >
                    1
                  </a>
                  <a
                    className="page-numbers"
                    href={process.env.PUBLIC_URL + "/training_list2"}
                  >
                    2
                  </a>
                  <a className="page-numbers current">3</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TrainingList3;
