import React, { Component } from "react";
import Header from "../layout/Header";

export class TrainingList2 extends Component {
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
                      src="https://i.imgur.com/dvhXqeD.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/ISACA-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/ISACA-training"}>
                          ISACA
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-blog end */}
              </div>

              {/* AI */}
              <div className="col-lg-4 col-md-6">
                {/* featured-imagebox-blog */}
                <div className="featured-imagebox featured-imagebox-blog mb-30">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/ODs8ihF.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/AI-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/AI-training"}>AI</a>
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
                      src="https://i.imgur.com/T7a1HRW.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a
                        href={process.env.PUBLIC_URL + "/ITSecuirity-training"}
                      >
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a
                          href={
                            process.env.PUBLIC_URL + "/ITSecuirity-training"
                          }
                        >
                          IT Secuirity
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
                      src="https://i.imgur.com/sVnaK7b.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a
                        href={process.env.PUBLIC_URL + "/Programming-training"}
                      >
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a
                          href={
                            process.env.PUBLIC_URL + "/Programming-training"
                          }
                        >
                          Programming
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
                      src="https://i.imgur.com/YxglLtc.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a
                        href={
                          process.env.PUBLIC_URL + "/ProjectManagement-training"
                        }
                      >
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a
                          href={
                            process.env.PUBLIC_URL +
                            "/ProjectManagement-training"
                          }
                        >
                          Project Management
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
                      src="https://i.imgur.com/ciKmAul.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a
                        href={
                          process.env.PUBLIC_URL +
                          "/ITServiceManagment-training"
                        }
                      >
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a
                          href={
                            process.env.PUBLIC_URL +
                            "/ITServiceManagment-training"
                          }
                        >
                          IT Service Management
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
                      src="https://i.imgur.com/2jGxhJC.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a
                        href={process.env.PUBLIC_URL + "/ITGovernence-training"}
                      >
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a
                          href={
                            process.env.PUBLIC_URL + "/ITGovernence-training"
                          }
                        >
                          IT Governence
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
                      src="https://i.imgur.com/XOebBiR.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/DataCenter-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a
                          href={process.env.PUBLIC_URL + "/DataCenter-training"}
                        >
                          Data Center
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
                      src="https://i.imgur.com/nhObz74.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a
                        href={
                          process.env.PUBLIC_URL + "/DigitalMarketing-training"
                        }
                      >
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a
                          href={
                            process.env.PUBLIC_URL +
                            "/DigitalMarketing-training"
                          }
                        >
                          Digital Marketing
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
                    href={process.env.PUBLIC_URL + "/training_list1"}
                  >
                    <i className="ti ti-arrow-left" />
                  </a>
                  <a
                    className="page-numbers"
                    href={process.env.PUBLIC_URL + "/training_list1"}
                  >
                    1
                  </a>
                  <a className="page-numbers current">2</a>
                  <a
                    className="page-numbers"
                    href={process.env.PUBLIC_URL + "/training_list3"}
                  >
                    3
                  </a>
                  <a
                    className="next page-numbers"
                    href={process.env.PUBLIC_URL + "/training_list3"}
                  >
                    <i className="ti ti-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TrainingList2;
