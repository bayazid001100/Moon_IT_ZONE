import React, { Component } from "react";
import Header from "../layout/Header";

export class Solutions2 extends Component {
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
                    <h2 className="title">SOLUTIONS &amp; SERVICES</h2>
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
              <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                {/* featured-imagebox-post */}
                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                  <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/qUbDXDi.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                    <div className="post-title featured-title">
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Software_Solution"}>
                          Software
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc ttm-box-desc">
                      <p>
                        MOON IT ZONE has been providing financial management and
                        billing software and related services to local
                        governments and utilities since...
                      </p>
                    </div>
                    <div className="post-meta">
                      <span className="ttm-meta-line"></span>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-post end*/}
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                {/* featured-imagebox-post */}
                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                  <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/DIygsWy.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                    <div className="post-title featured-title">
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/IoT_Solution"}>
                          IoT
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc ttm-box-desc">
                      <p>
                        IoT solution keeps food fresh…and data fresher. LEARN
                        MORE. Overview; Featured Work; Solutions; Latest...
                      </p>
                    </div>
                    <div className="post-meta">
                      <span className="ttm-meta-line"></span>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-post end*/}
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                {/* featured-imagebox-post */}
                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                  <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/FYqvkuK.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                    <div className="post-title featured-title">
                      <h5>
                        <a
                          href={process.env.PUBLIC_URL + "/Deployment_Solution"}
                        >
                          Deployment
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc ttm-box-desc">
                      <p>
                        You configure a preboot environment in which client
                        computers can boot using a PXE image and then execute
                        the deployment tasks that...
                      </p>
                    </div>
                    <div className="post-meta">
                      <span className="ttm-meta-line"></span>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-post end*/}
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                {/* featured-imagebox-post */}
                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                  <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/lheL99G.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                    <div className="post-title featured-title">
                      <h5>
                        <a
                          href={
                            process.env.PUBLIC_URL + "/Call_Center_Solution"
                          }
                        >
                          Call Center
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc ttm-box-desc">
                      <p>
                        Hosted Call center Software suite is an all-inclusive
                        telecommunication solution to help...
                      </p>
                    </div>
                    <div className="post-meta">
                      <span className="ttm-meta-line"></span>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-post end*/}
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                {/* featured-imagebox-post */}
                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                  <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/90eTd3X.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                    <div className="post-title featured-title">
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/IT_Automation"}>
                          IT Automation
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc ttm-box-desc">
                      <p>
                        IT Automation solutions help automate processes within
                        hybrid environments, allowing users to integrate,
                        coordinate and automate...
                      </p>
                    </div>
                    <div className="post-meta">
                      <span className="ttm-meta-line"></span>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-post end*/}
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                {/* featured-imagebox-post */}
                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                  <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/ryRYkU3.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                    <div className="post-title featured-title">
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Green_IT"}>
                          Green IT
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc ttm-box-desc">
                      <p>
                        Green IT is a Sustainable Information and Communications
                        Technology consultancy providing design and management
                        of IT systems and...
                      </p>
                    </div>
                    <div className="post-meta">
                      <span className="ttm-meta-line"></span>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-post end*/}
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                {/* featured-imagebox-post */}
                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                  <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/ud46Cdp.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                    <div className="post-title featured-title">
                      <h5>
                        <a
                          href={process.env.PUBLIC_URL + "/Blockchain_Solution"}
                        >
                          Blockchain
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc ttm-box-desc">
                      <p>
                        Blockchain solutions are where blockchain for business
                        comes to life. Join the blockchain innovators who are
                        transforming industries...
                      </p>
                    </div>
                    <div className="post-meta">
                      <span className="ttm-meta-line"></span>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-post end*/}
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                {/* featured-imagebox-post */}
                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                  <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/ynE8R1y.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                    <div className="post-title featured-title">
                      <h5>
                        <a
                          href={
                            process.env.PUBLIC_URL +
                            "/Enterprise_Video_Conferencing"
                          }
                        >
                          Enterprise Video Conferencing
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc ttm-box-desc">
                      <p>
                        MOON IT ZONE enterprise video conferencing solution
                        offers an intelligent, high-fidelity meeting...
                      </p>
                    </div>
                    <div className="post-meta">
                      <span className="ttm-meta-line"></span>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-post end*/}
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                {/* featured-imagebox-post */}
                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                  <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/BHY81HO.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                    <div className="post-title featured-title">
                      <h5>
                        <a
                          href={
                            process.env.PUBLIC_URL +
                            "/Digital_Marketing_Solution"
                          }
                        >
                          Digital Marketing
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc ttm-box-desc">
                      <p>
                        We are a team of online marketing experts with
                        background in top-notch companies such as...
                      </p>
                    </div>
                    <div className="post-meta">
                      <span className="ttm-meta-line"></span>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-post end*/}
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                {/* featured-imagebox-post */}
                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                  <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/ohbfTtG.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                    <div className="post-title featured-title">
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/IT_Audit"}>
                          IT Audit
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc ttm-box-desc">
                      <p>
                        We offer services that identify, develop and test
                        internal controls and policies. Our control reviews are
                        created...
                      </p>
                    </div>
                    <div className="post-meta">
                      <span className="ttm-meta-line"></span>
                    </div>
                  </div>
                </div>
                {/* featured-imagebox-post end*/}
              </div>
            </div>
            {/* row end */}
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="ttm-pagination">
                  <a
                    className="next page-numbers"
                    href={process.env.PUBLIC_URL + "/solutions_1"}
                  >
                    <i className="ti ti-arrow-left" />
                  </a>
                  <a
                    className="page-numbers"
                    href={process.env.PUBLIC_URL + "/solutions_1"}
                  >
                    1
                  </a>
                  <a className="page-numbers current">2</a>
                  <a
                    className="page-numbers"
                    href={process.env.PUBLIC_URL + "/solutions_3"}
                  >
                    3
                  </a>
                  <a
                    className="next page-numbers"
                    href={process.env.PUBLIC_URL + "/solutions_3"}
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

export default Solutions2;
