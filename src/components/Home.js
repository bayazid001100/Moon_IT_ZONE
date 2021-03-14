import React, { Component } from "react";
import Slider from "react-slick";
import { MDBProgress } from "mdbreact";
import { Header } from "./layout/Header";
import { CarouselPage } from "./banner/Home1_banner";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// const images = [
//   "https://via.placeholder.com/600X750/444444.jpg",
//   "https://via.placeholder.com/600X750/444444.jpg",
//   "https://via.placeholder.com/600X750/444444.jpg",
//   "https://via.placeholder.com/600X750/444444.jpg",
//   "https://via.placeholder.com/600X750/444444.jpg",
// ];

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    var slick_slider = {
      dots: false,
      arrow: true,
      autoplay: true,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="site-main">
        <Header />
        {/* home banner */}
        <CarouselPage />
        {/* home banner end*/}
        {/* service-section */}
        <section className="ttm-row service-section position-relative z-1 clearfix">
          <div className="container-xl">
            <div className="row no-gutters featured-icon-box-style1-row ttm-bgcolor-darkgrey">
              <div className="col-md-4">
                <div className="featured-icon-box left-icon style1 ttm-bgcolor-skincolor ttm-textcolor-white h-100">
                  <div className="featured-icon">
                    {/*  featured-icon */}
                    <div className="ttm-icon ttm-bgcolor-darkgrey ttm-icon_element-size-md">
                      <i className="flaticon flaticon-system" />
                      {/*  ttm-icon */}
                    </div>
                  </div>
                  <div className="featured-content">
                    {/*  featured-content */}
                    <div className="featured-title">
                      {/*  featured-title */}
                      <h5>Trusted Services</h5>
                    </div>
                    <div className="featured-desc">
                      {/*  featured-desc */}
                      <p>We Are Trusted Our Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                {/*  featured-icon-box */}
                <div className="featured-icon-box left-icon style1 ttm-bgcolor-darkgrey ttm-textcolor-white">
                  <div className="featured-icon">
                    {/*  featured-icon */}
                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md">
                      <i className="flaticon flaticon-clock" />
                      {/*  ttm-icon */}
                    </div>
                  </div>
                  <div className="featured-content">
                    {/*  featured-content */}
                    <div className="featured-title">
                      {/*  featured-title */}
                      <h5>24/7 Support</h5>
                    </div>
                    <div className="featured-desc">
                      {/*  featured-desc */}
                      <p>+8801321156667</p>
                    </div>
                  </div>
                </div>
                {/*  featured-icon-box END */}
              </div>
              <div className="col-md-4">
                {/*  featured-icon-box */}
                <div className="featured-icon-box left-icon style1 ttm-bgcolor-skincolor ttm-textcolor-white">
                  <div className="featured-icon">
                    {/*  featured-icon */}
                    <div className="ttm-icon ttm-bgcolor-darkgrey ttm-icon_element-size-md">
                      <i className="flaticon flaticon-developer" />
                      {/*  ttm-icon */}
                    </div>
                  </div>
                  <div className="featured-content">
                    {/*  featured-content */}
                    <div className="featured-title">
                      {/*  featured-title */}
                      <h5>Expert &amp; Professional</h5>
                    </div>
                    <div className="featured-desc">
                      {/*  featured-desc */}
                      <p>We Are Trusted Our Customers</p>
                    </div>
                  </div>
                </div>
                {/*  featured-icon-box END */}
              </div>
            </div>
          </div>
        </section>
        {/* service-section end */}
        {/* aboutus-section */}
        <section className="ttm-row aboutus-section clearfix">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-15">
                {/* section title */}
                <div className="section-title with-desc clearfix">
                  {/* <div className="title-header" style={{ textAlign: "center" }}> */}
                  <div style={{ textAlign: "center" }}>
                    <h5>About us</h5>
                    <h2 className="title">
                      We are here to IT Solution with 20 years of{" "}
                      <span>experience</span>
                    </h2>
                  </div>
                  <div
                    className="title-desc"
                    style={{ paddingTop: "15px", textAlign: "center" }}
                  >
                    <p>
                      Web designing in a powerful way of just not an only
                      professions, however, in a passion for our Company. We
                      have to a tendency to believe the idea that smart looking
                      of any website is the first impression on visitors. And
                      the smart design of any website is the starting point.
                    </p>
                    <p>
                      We have a special team for website style who has been
                      involved in designing professional websites of all
                      categories.
                    </p>
                  </div>
                </div>
                {/* section title end */}
                {/* row */}
                <div
                  className="row no-gutters mt-4"
                  style={{ textAlign: "center" }}
                >
                  <div className="col-md-6 col-lg-6 col-sm-6">
                    <ul className="ttm-list ttm-list-style-icon">
                      <li>
                        <i className=" ttm-textcolor-skincolor" />
                        {/* far fa-circle  */}
                        <span className="ttm-list-li-content">
                          Web And Mobile Application{" "}
                        </span>
                      </li>
                      <li>
                        <i className=" ttm-textcolor-skincolor" />
                        <span className="ttm-list-li-content">
                          New Domain Registration
                        </span>
                      </li>
                      <li>
                        <i className=" ttm-textcolor-skincolor" />
                        <span className="ttm-list-li-content">
                          Data Text Synchronization
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6">
                    <ul className="ttm-list ttm-list-style-icon">
                      <li>
                        <i className=" ttm-textcolor-skincolor" />
                        <span className="ttm-list-li-content">
                          Improving Our Website Design
                        </span>
                      </li>
                      <li>
                        <i className=" ttm-textcolor-skincolor" />
                        <span className="ttm-list-li-content">
                          Web &amp; Email Hosting Services{" "}
                        </span>
                      </li>
                      <li>
                        <i className=" ttm-textcolor-skincolor" />
                        <span className="ttm-list-li-content">
                          Artificial Intelligence Web App
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* row END*/}
                {/* separator */}
                <div className="separator">
                  <div className="sep-line mt-4 mb-4" />
                </div>
                {/* separator */}
                <div
                  className="fs-16 ttm-textcolor-darkgrey"
                  style={{ textAlign: "center" }}
                >
                  <span>
                    Call to ask{" "}
                    <a className="fw-500 ttm-textcolor-darkgrey">
                      <u>any question</u>
                    </a>
                  </span>
                  <strong className="fs-18">: +8801321156667</strong>
                </div>
              </div>
              {/* <div className="col-lg-6 res-991-mt-40 res-991-text-center">
                <div className="position-relative res-991-mt-30"> */}
              {/* ttm_single_image-wrapper */}
              {/* <div className="ttm_single_image-wrapper">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/649X614/444444.png"
                      title="single-img-one"
                      alt="single-img-one"
                    />
                  </div> */}
              {/* ttm_single_image-wrapper end */}
              {/*featured-icon-box*/}
              {/* <div className="about-overlay-01">
                    <p className="mb-0">
                      American IT Solutions Association AIA.
                    </p>
                  </div> */}
              {/* featured-icon-box end*/}
              {/* </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* aboutus-section end */}
        {/* history-section */}
        <section className="ttm-row history-section bg-img3 ttm-bgcolor-grey ttm-bg ttm-bgimage-yes clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                {/* section title */}
                <div className="section-title with-desc text-center clearfix">
                  <div className="title-header">
                    <h5>Our Solutions &amp; Services</h5>
                    <h2 className="title">
                      We provide all kinds of solutions &amp; services in form
                      of <span>Information &amp; Technologies</span>
                    </h2>
                  </div>
                </div>
                {/* section title end */}
              </div>
            </div>
            <Slider
              className="row slick_slider ttm-boxes-spacing-30px"
              {...slick_slider}
            >
              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                  {/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">
                    {/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-business-and-finance" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />
                  {/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title">
                      <h5>
                        Data Center Power <br /> &amp; <b />
                        Cooling
                      </h5>
                    </div>
                    {/* historybox-title  */}
                    <div className="ttm-historybox-description">
                      {/* description  */}
                      Meaningful breakthroughs in data center power and cooling
                      are rare, and new technologies that do get introduced take
                      a long time to gain...
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href={
                        process.env.PUBLIC_URL + "/Data_Center_Power_Cooling"
                      }
                    >
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                  {/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">
                    {/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-computer" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />
                  {/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title">
                      <h5>
                        Enterprise System <br />
                        &amp;
                        <br />
                        Private Cloud
                      </h5>
                    </div>
                    {/* historybox-title  */}
                    <div className="ttm-historybox-description">
                      {/* description  */}
                      We provide all kind of Enterprise System &amp; Private
                      Cloud of in the according to on their organization
                      prioritie.
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href={
                        process.env.PUBLIC_URL +
                        "/Enterprise_System_Private_Cloud"
                      }
                    >
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                  {/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">
                    {/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-data" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />
                  {/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title">
                      <h5>
                        Software Define Network <br />
                        &amp;
                        <br /> Data Center Infrastructure
                      </h5>
                    </div>
                    {/* historybox-title  */}
                    <div className="ttm-historybox-description">
                      {/* description  */}
                      For any services of Software Define Network &amp; Data
                      Center Infrastructure.......
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href={
                        process.env.PUBLIC_URL +
                        "/Software_Define_Network_Data_Center_Infrastructure"
                      }
                    >
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                  {/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">
                    {/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-global-1" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />
                  {/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title">
                      <h5>Cloud Computing</h5>
                    </div>
                    {/* historybox-title  */}
                    <div className="ttm-historybox-description">
                      {/* description  */}
                      We develop, migrate and work on web applications to ensure
                      that they run on capably on clouds. You could be benifited
                      by Cost savings, Mobility, Disaster recovery.....
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href={process.env.PUBLIC_URL + "/Cloud_Computing"}
                    >
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                  {/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">
                    {/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-business-and-finance" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />
                  {/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title">
                      <h5>Cyber Security</h5>
                    </div>
                    {/* historybox-title  */}
                    <div className="ttm-historybox-description">
                      {/* description  */}
                      protecting endpoints, data centers, networks, and cloud
                      environments. Try now for fee! Stay on top of the emerging
                      cyber threats with one integrated security platform.
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href={process.env.PUBLIC_URL + "/Cyber_Security"}
                    >
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </Slider>

            <div className="row">
              <div className="col-md-12 text-center mt-5 res-991-mt-30">
                <p className="mb-0">
                  Don’t hesitate, contact us for better solutions and services.{" "}
                  <strong>
                    <u>
                      <a
                        href={process.env.PUBLIC_URL + "/solutions_1"}
                        className="ttm-textcolor-darkgrey"
                      >
                        {" "}
                        View more
                      </a>
                    </u>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* history-section end*/}

        {/* team-section */}
        <section className="ttm-row team-section res-991-pt-0 clearfix">
          <div className="container-xl">
            <div className="row align-items-center mb-5">
              <div className="col-lg-5 res-991-text-center">
                <div className="section-title style2 mb-0 clearfix">
                  <div className="title-header mb-0">
                    <h2 className="title">
                      Meet our <span>Team</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 res-991-text-center">
                <div className="title-desc">
                  The positive distinction within the World Inspiring of Success
                  and Connections of People and Organizations.
                </div>
              </div>
            </div>
            <Slider
              className="row slick_slider ttm-boxes-spacing-30px"
              {...slick_slider}
              slidesToShow={3}
            >
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/t1aUDr2.jpg"
                      alt=""
                    />
                    {/* <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">
                        <li className="social-facebook">
                          <a>
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="social-twitter">
                          <a>
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="social-linkedin">
                          <a>
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li className="social-googleplus">
                          <a>
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a>Bayazid Mahmud Saikat</a>
                      </h5>
                    </div>
                    <p className="category">Web Developer</p>
                    {/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/xJoyRLX.jpg"
                      alt=""
                    />
                    {/* <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">
                        
                        <li className="social-facebook">
                          <a>
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="social-twitter">
                          <a>
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="social-linkedin">
                          <a>
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li className="social-googleplus">
                          <a>
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a>Md. Sohel Rana</a>
                      </h5>
                    </div>
                    <p className="category">Software Developer</p>
                    {/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://i.imgur.com/G2fwMwC.jpg"
                    />
                    {/* <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">
                        <li className="social-facebook">
                          <a>
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="social-twitter">
                          <a>
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="social-linkedin">
                          <a>
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li className="social-googleplus">
                          <a>
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a>Abid Al Amin</a>
                      </h5>
                    </div>
                    <p className="category">Full Stack Developer</p>
                    {/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://i.imgur.com/BqTdtdE.jpg"
                    />
                    {/* <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">
                        
                        <li className="social-facebook">
                          <a>
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="social-twitter">
                          <a>
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="social-linkedin">
                          <a>
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li className="social-googleplus">
                          <a>
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a>Md. Sadek Hossain</a>
                      </h5>
                    </div>
                    <p className="category">Manager, Business Officer</p>
                    {/* category */}
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        {/* team-section end*/}
        {/* first-row-title-section */}
        <section className="ttm-row first-row-title-section ttm-bgcolor-darkgrey ttm-textcolor-white ttm-bg ttm-bgimage-yes  clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container-xl">
            <div className="row">
              {/* row */}
              <div className="col-lg-8 offset-lg-2">
                <div className="text-center">
                  {/* <div className="ttm-play-icon-btn mb-5">
                    <div className="ttm-play-icon-animation">
                      <a id="playbutton">
                        <div className="ttm-icon ttm-bgcolor-white ttm-textcolor-skincolor ttm-icon_element-size-sm rounded-circle">
                          <i className="fas fa-play" />
                        </div>
                      </a>
                      <div id="videobox">
                        <i id="close-btn" className="fa fa-times"></i>
                        <div id="video-wrapper">
                          <iframe
                            width="500"
                            height="500"
                            src="https://www.youtube.com/embed/7e90gBu4pas"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* section-title */}
                  <div className="section-title with-desc text-center clearfix">
                    <div className="title-header">
                      <h2 className="title">
                        We Provide Outsourced IT Equipments For Small, Mid &amp;{" "}
                        <span className="ttm-textcolor-white">
                          Big-Sized Business
                        </span>
                      </h2>
                    </div>
                    <div className="title-desc">
                      Appropriate for your specific business, making it easy for
                      <br /> you to have quality IT Equipments. What We Provide
                    </div>
                  </div>
                  {/* section-title end */}
                  <div className="mt-5">
                    <a className="ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white">
                      Check Out Our Products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* first-row-title-section end*/}
        {/* testimonial-section */}
        {/* <section className="ttm-row zero-padding-section clearfix"> */}
        {/* <div className="container-xl">
            <div className="row no-gutters mt_100 res-991-mt-0">
              <div className="col-md-6">
                <div className="ttm-bgcolor-darkgrey ttm-textcolor-white z-11 position-relative h-100">
                  <div className="layer-content"> */}
        {/* layer-content */}
        {/* <div className="spacing-2"> */}
        {/* spacing-2 */}
        {/* section title */}
        {/* <div className="section-title ttm with-desc clearfix">
                        <div className="title-header">
                          <h5>What We Do</h5>
                          <h2 className="title">
                            We help you to grow your business{" "}
                            <span className="ttm-textcolor-white">
                              Exponentially
                            </span>
                          </h2>
                        </div>
                      </div> */}
        {/* section title end */}
        {/* progress-bar */}
        {/* <div className="ttm-progress-bar">
                        <div className="progress-bar-title float-left">
                          UI/UX Design
                        </div> */}
        {/* progress-bar-title */}
        {/* <label className="float-right">90%</label>
                        <MDBProgress
                          className="w-100"
                          material
                          value={90}
                        ></MDBProgress>
                      </div> */}
        {/* progress-bar END */}
        {/* progress-bar */}
        {/* <div className="ttm-progress-bar">
                        <div className="progress-bar-title float-left">
                          App Development
                        </div> */}
        {/* progress-bar-title */}
        {/* <label className="float-right">80%</label>
                        <MDBProgress
                          className="w-100"
                          material
                          value={80}
                        ></MDBProgress>
                      </div> */}
        {/* progress-bar END */}
        {/* </div> */}
        {/* spacing-2 END */}
        {/* </div> */}
        {/* layer-content END */}
        {/* </div>
              </div>
              <div className="col-md-6">
                <div className="col-bg-img-two ttm-col-bgimage-yes ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-skincolor ttm-textcolor-white">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner" />
                  </div>
                  <div className="layer-content">
                    <div className="testimonial-slide style1">
                      <Slider
                        className="row slick_slider"
                        arrows={false}
                        dots={true}
                      >
                        <div className="col-lg-12">
                          <div className="testimonials text-center">
                            <div className="testimonial-content"> */}
        {/* testimonials-content */}
        {/* <div className="testimonial-avatar">
                                <div className="testimonial-img"> */}
        {/* testimonials-img */}
        {/* <img
                                    className="img-center"
                                    alt="testimonial-img"
                                    src="https://via.placeholder.com/150X150/444444.jpg"
                                  />
                                </div>
                              </div>
                              <blockquote>
                                Our team discussed every single detail to make
                                sure Creatives Planet is the most versatile and
                                unique theme created so far. No coding skills.
                              </blockquote>
                              <div className="ttm-ratting-star">
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                              </div>
                              <div className="testimonial-caption"> */}
        {/* testimonials-caption */}
        {/* <h6>Victor Williamson</h6>
                                <label>Web Devloper</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="testimonials text-center">
                            <div className="testimonial-content"> */}
        {/* testimonials-content */}
        {/* <div className="testimonial-avatar">
                                <div className="testimonial-img"> */}
        {/* testimonials-img */}
        {/* <img
                                    className="img-center"
                                    src="https://via.placeholder.com/150X150/444444.jpg"
                                    alt="testimonial-img"
                                  />
                                </div>
                              </div>
                              <blockquote>
                                Our team discussed every single detail to make
                                sure Creatives Planet is the most versatile and
                                unique theme created so far. No coding skills.
                              </blockquote>
                              <div className="ttm-ratting-star">
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                              </div>
                              <div className="testimonial-caption"> */}
        {/* testimonials-caption */}
        {/* <h6>Victor Williamson</h6>
                                <label>Web Devloper</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="testimonials text-center">
                            <div className="testimonial-content"> */}
        {/* testimonials-content */}
        {/* <div className="testimonial-avatar">
                                <div className="testimonial-img"> */}
        {/* testimonials-img */}
        {/* <img
                                    className="img-center"
                                    alt="testimonial-img"
                                    src="https://via.placeholder.com/150X150/444444.jpg"
                                  />
                                </div>
                              </div> */}
        {/* <blockquote>
                                Our team discussed every single detail to make
                                sure Creatives Planet is the most versatile and
                                unique theme created so far. No coding skills.
                              </blockquote>
                              <div className="ttm-ratting-star">
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                                &nbsp;
                                <i className="fa fa-star" />
                              </div>
                              <div className="testimonial-caption"> */}
        {/* testimonials-caption */}
        {/* <h6>Victor Williamson</h6>
                                <label>Web Devloper</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* testimonial-section end */}

        {/* portfolio-section */}

        {/* process-section end */}
        {/* blog-section */}
        <section className="ttm-row blog-section res-991-pt-0 clearfix">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12">
                {/* section title */}
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header">
                    <h5>Trainings &amp; Certifications</h5>
                    <h2 className="title">
                      Check Out Our <span>Trainings</span>
                    </h2>
                  </div>
                </div>
                {/* section title end */}
              </div>
            </div>
            <Slider
              className="row slick_slider ttm-boxes-spacing-30px"
              {...slick_slider}
              slidesToShow={3}
            >
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://i.imgur.com/NqOj4B6.jpg"
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/Cisco-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    {/* featured-content */}
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Cisco-training"}>
                          Cisco
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      {/* featured-description */}
                      <p>
                        Cisco Certifications help you launch and advance your IT
                        Networking career. Find the right Cisco certification
                        for you....
                      </p>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href={process.env.PUBLIC_URL + "/Cisco-training"}
                    >
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://i.imgur.com/AR1SK5R.png"
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/VMware-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    {/* featured-content */}
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/VMware-training"}>
                          VMware
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      {/* featured-description */}
                      <p>
                        VMware Learning provides training and certification
                        programs designed to grow your skills and validate your
                        ability to...
                      </p>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href={process.env.PUBLIC_URL + "/VMware-training"}
                    >
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://i.imgur.com/9zdVHNa.jpg"
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
                    {/* featured-content */}
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
                    <div className="featured-desc">
                      {/* featured-description */}
                      <p>
                        Coding Course to Learn Programming for Beginners. In
                        order to learn Coding, the first step is to pick a
                        programming language...
                      </p>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href={process.env.PUBLIC_URL + "/Programming-training"}
                    >
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <img
                      className="img-fluid"
                      alt=""
                      src="https://i.imgur.com/qQbLpFp.jpg"
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href={process.env.PUBLIC_URL + "/Juniper-training"}>
                        <i className="ti ti-plus" />
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    {/* featured-content */}
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <a href={process.env.PUBLIC_URL + "/Juniper-training"}>
                          Juniper
                        </a>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      {/* featured-description */}
                      <p>
                        Ensure your team has the skills to build the best
                        network with training and certification from Juniper
                        Networks...
                      </p>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href={process.env.PUBLIC_URL + "/Juniper-training"}
                    >
                      Read More <i className="ti ti-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="mt-6" style={{ textAlign: "center" }}>
              <a
                className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-orange"
                style={{ fontSize: "20px" }}
                href={process.env.PUBLIC_URL + "/training_list1"}
              >
                More Training....
              </a>
            </div>
          </div>
        </section>
        {/* blog-section end */}
      </div>
    );
  }
}

export default Home;

// {/* zero-padding-section */}
// <section className="ttm-row zero-padding-section mt_80 res-991-mt-0 clearfix">
//   <div className="container-xl">
//     <div className="row no-gutters">
//       <div className="col-lg-6">
//         {/* col-bg-img-one */}
//         <div className="col-bg-img-one ttm-bg ttm-col-bgimage-yes ttm-left-span res-991-h-auto">
//           <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
//             <div className="ttm-bg-layer-inner" />
//           </div>
//         </div>
//         {/* Responsive View image */}
//         <img
//           src="https://via.placeholder.com/1533X720/888888.jpg"
//           className="ttm-equal-height-image img-fluid"
//           alt="col-bgimage-1"
//         />
//       </div>
//       <div className="col-lg-6 z-9">
//         <div className="ttm-bgcolor-skincolor ttm-textcolor-white position-relative ttm-right-span">
//           <div className="spacing-1">
//             {/* section title */}
//             <div className="section-title with-desc clearfix">
//               <div className="title-header">
//                 <h5>Why Altech</h5>
//                 <h2 className="title">
//                   We deal with the aspects of professional{" "}
//                   <span>IT Services</span>
//                 </h2>
//               </div>
//               <div className="title-desc">
//                 <p>
//                   Our IT services converge business and technology
//                   experts to help to manage business processes of all
//                   categories.
//                 </p>
//               </div>
//             </div>
//             {/* section title end */}
//             <div className="row mt-40">
//               <div className="col-12">
//                 {/* featured-icon-box */}
//                 <div className="featured-icon-box style2 left-icon icon-align-top">
//                   <div className="featured-icon">
//                     {/* featured-icon */}
//                     <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
//                       <i className="flaticon flaticon-process" />
//                     </div>
//                   </div>
//                   <div className="featured-content">
//                     <div className="featured-title">
//                       {/* featured title */}
//                       <h5>Product Designs</h5>
//                     </div>
//                     <div className="featured-desc">
//                       {/* featured desc */}
//                       <p>
//                         Our firm is expert to create an efficient user
//                         interface that makes user interaction is lively.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* separator */}
//             <div className="separator">
//               <div className="sep-line mt-4 mb-4" />
//             </div>
//             {/* separator */}
//             <div className="row">
//               <div className="col-12">
//                 {/* featured-icon-box */}
//                 <div className="featured-icon-box style2 left-icon icon-align-top">
//                   <div className="featured-icon">
//                     {/* featured-icon */}
//                     <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
//                       <i className="flaticon flaticon-system" />
//                     </div>
//                   </div>
//                   <div className="featured-content">
//                     <div className="featured-title">
//                       {/* featured title */}
//                       <h5>Big Data &amp; Analytics</h5>
//                     </div>
//                     <div className="featured-desc">
//                       {/* featured desc */}
//                       <p>
//                         Statistical analysis to help an organization to
//                         gain insights from large information web sets.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* separator */}
//             <div className="separator">
//               <div className="sep-line mt-4 mb-4" />
//             </div>
//             {/* separator */}
//             <div className="row">
//               <div className="col-12">
//                 {/* featured-icon-box */}
//                 <div className="featured-icon-box style2 left-icon icon-align-top">
//                   <div className="featured-icon">
//                     {/* featured-icon */}
//                     <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
//                       <i className="flaticon flaticon-data" />
//                     </div>
//                   </div>
//                   <div className="featured-content">
//                     <div className="featured-title">
//                       {/* featured title */}
//                       <h5>Maintain App Data</h5>
//                     </div>
//                     <div className="featured-desc">
//                       {/* featured desc */}
//                       <p>
//                         We Create the optimal platform to develop and
//                         run digital applications for our clients app.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// {/* zero-padding-section end */}
