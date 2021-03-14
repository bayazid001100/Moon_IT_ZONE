import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class Menu extends Component {
  render() {
    return (
      <nav id="menu" role="navigation" className="menu">
        <ul>
          {/* Home */}
          <li className="menu-hasdropdown">
            <a href={process.env.PUBLIC_URL + "/"}>Home</a>
            {/* <ul className="menu-dropdown">
              <li>
                <a href={process.env.PUBLIC_URL + "/"}>Homepage 1</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Home2"}>Homepage 2</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Home3"}>Homepage 3</a>
              </li>
              <li className="menu-hasdropdown menu-hasflyout">
                <a>header styles</a>
                <ul className="menu-dropdown">
                  <li>
                    <a href={process.env.PUBLIC_URL + "/"}>Header Style 01</a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={process.env.PUBLIC_URL + "/Header_style_02"}
                    >
                      Header Style 02
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={process.env.PUBLIC_URL + "/Header_style_03"}
                    >
                      Header Style 03
                    </a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>
          {/* About us */}
          <li className="menu-hasdropdown">
            <a href={process.env.PUBLIC_URL + "/about_us"}>About Us</a>
          </li>

          {/* Products */}
          <li className="menu-hasdropdown">
            <a>Products</a>
            <ul className="menu-dropdown">
              <li>
                <a href={process.env.PUBLIC_URL + "/network-router"}>
                  Network Router
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/network-switch"}>
                  Network Switch
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/fttx"}>FTTX</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/wireless-networking"}>
                  Wireless Networking
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/wireless-router"}>
                  Wireless Router
                </a>
              </li>
              <li>
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/fiber-optic-networking-accessories"
                  }
                >
                  Fiber Optic Networking Accessories
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/networking-cables"}>
                  Networking Cables
                </a>
              </li>
              <li>
                <a
                  href={process.env.PUBLIC_URL + "/lan-networking-accessories"}
                >
                  LAN Networking Accessories
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/network-testing-equipment"}>
                  Network Testing Equipment
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/catv-products"}>
                  CATV Products
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/server-rack-cabinet"}>
                  Server Rack &amp; Cabinet
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/computer-accessories"}>
                  Computer Accessories
                </a>
              </li>
              {/* <li>
                <a href={process.env.PUBLIC_URL + "/software-periphery"}>
                  Software Periphery
                </a>
              </li> */}
            </ul>
          </li>
          {/* <li className="menu-hasdropdown">
            <a>pages</a>
            <ul className="menu-dropdown">
              <li>
                <a href={process.env.PUBLIC_URL + "/aboutus_01"}>About Us 1</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/aboutus_02"}>About Us 2</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Services_01"}>Services 1</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Services_02"}>Services 2</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Our_expert"}>Our Expert</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Faq"}>FAQs</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Contact_01"}>
                  Contact Us 1
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Contact_02"}>
                  Contact Us 2
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Error"}>Error Page</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Element"}>Elements</a>
              </li>
            </ul>
          </li> */}
          {/* Solutions & Services */}
          <li className="menu-hasdropdown">
            <a href={process.env.PUBLIC_URL + "/solutions_1"}>
              Solutions &amp; Services
            </a>
          </li>
          {/* <li className="menu-hasdropdown">
            <a>services</a>
            <ul className="menu-dropdown">
              <li>
                <a href={process.env.PUBLIC_URL + "/it_consultancy"}>
                  IT Consultancy
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/digital_services"}>
                  Digital Services
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/advisory_services"}>
                  Advisory Services
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/data_structuring"}>
                  Data Structuring
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/experience_design"}>
                  Experience Design
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/content_engineering"}>
                  Content Engineering
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-hasdropdown">
            <a>Project</a>
            <ul className="menu-dropdown">
              <li>
                <a href={process.env.PUBLIC_URL + "/project_style1"}>
                  Project Style 1
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/project_style2"}>
                  Project Style 2
                </a>
              </li>
              <li className="menu-hasdropdown menu-hasflyout">
                <a href={process.env.PUBLIC_URL + "/single_style1"}>
                  Project Single
                </a>
                <ul className="menu-dropdown">
                  <li>
                    <a href={process.env.PUBLIC_URL + "/single_style1"}>
                      Single Style 1
                    </a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL + "/single_style2"}>
                      Single Style 2
                    </a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL + "/single_style3"}>
                      Single Style 3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu-hasdropdown">
            <a>Blog</a>
            <ul className="menu-dropdown">
              <li>
                <a href={process.env.PUBLIC_URL + "/blog"}>Blog Classic</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/blog_grid"}>
                  Blog Grid View
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/blog_top_image"}>
                  Blog Top Image
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/blog_left_image"}>
                  Blog Left Image
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/single_blog"}>
                  Blog Single View
                </a>
              </li>
            </ul>
          </li> */}
          {/* <li className="menu-hasdropdown">
            <a>Shop</a>
            <ul className="menu-dropdown">
              <li>
                <a href={process.env.PUBLIC_URL + "/Shop"}>Default Shop</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Product_details"}>
                  Single Product Details
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Cart"}>Cart</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/Checkout"}>Checkout</a>
              </li>
            </ul>
          </li> */}
          {/* Training */}
          <li className="menu-hasdropdown">
            <a href={process.env.PUBLIC_URL + "/training_list1"}>Training</a>
          </li>
          {/* Career */}
          <li className="menu-hasdropdown">
            <a href={process.env.PUBLIC_URL + "/career"}>Career</a>
          </li>
          {/* Contact Us */}
          <li className="menu-hasdropdown">
            <a href={process.env.PUBLIC_URL + "/Contact_02"}>Contact Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}
