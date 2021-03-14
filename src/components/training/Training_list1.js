import React, { Component } from "react";
import Header from "../layout/Header";

export class TrainingList1 extends Component {
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
                      src="https://i.imgur.com/T1BAWgy.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/Cisco-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Cisco-training"}>
                          Cisco
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
                      src="https://i.imgur.com/EE2FMhN.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/Microsoft-training"}>
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
                          href={process.env.PUBLIC_URL + "/Microsoft-training"}
                        >
                          Microsoft
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
                      src="https://i.imgur.com/QGyFwTR.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/CompTia-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/CompTia-training"}>
                          CompTia
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
                      src="https://i.imgur.com/seGHcsS.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/MicroTik-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/MicroTik-training"}>
                          MicroTik
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
                      src="https://i.imgur.com/WqgSudf.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/Oracle-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Oracle-training"}>
                          Oracle
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
                      src="https://i.imgur.com/wce8xkf.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/ReadHat-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/ReadHat-training"}>
                          Red Hat
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
                      src="https://i.imgur.com/3mVQ99C.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/AWS-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/AWS-training"}>
                          AWS
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
                      src="https://i.imgur.com/IuwBLUS.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/VMware-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/VMware-training"}>
                          VMware
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
                      src="https://i.imgur.com/FN9A0xP.jpg"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/IoT-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/IoT-training"}>
                          IoT
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
                  <a className="page-numbers current">1</a>
                  <a
                    className="page-numbers"
                    href={process.env.PUBLIC_URL + "/training_list2"}
                  >
                    2
                  </a>
                  <a
                    className="page-numbers"
                    href={process.env.PUBLIC_URL + "/training_list3"}
                  >
                    3
                  </a>
                  <a
                    className="next page-numbers"
                    href={process.env.PUBLIC_URL + "/training_list2"}
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

export default TrainingList1;
