import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBHamburgerToggler,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Mobilemenu extends Component {
  state = {
    collapse1: false,
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    return (
      <Router>
        <MDBNavbar>
          <MDBHamburgerToggler
            id="hamburger1"
            onClick={() => this.toggleSingleCollapse("collapse1")}
          />
          <MDBCollapse isOpen={this.state.collapse1} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <a
                  href={process.env.PUBLIC_URL + "/"}
                  style={{ fontWeight: "bold" }}
                >
                  Home
                </a>
              </MDBNavItem>
              {/* About */}
              <MDBNavItem>
                <a
                  href={process.env.PUBLIC_URL + "/about_us"}
                  style={{ fontWeight: "bold" }}
                >
                  About Us
                </a>
              </MDBNavItem>

              {/* Products */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <a
                      style={{ fontWeight: "bold" }}
                      href={process.env.PUBLIC_URL + "/Contact_02"}
                    >
                      {" "}
                      Products
                    </a>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem
                      href={process.env.PUBLIC_URL + "/network-router"}
                    >
                      Network Router
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      href={process.env.PUBLIC_URL + "/network-switch"}
                    >
                      Network Switch
                    </MDBDropdownItem>
                    <MDBDropdownItem href={process.env.PUBLIC_URL + "/fttx"}>
                      FTTX
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      href={process.env.PUBLIC_URL + "/wireless-networking"}
                    >
                      Wireless Networking
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      href={process.env.PUBLIC_URL + "/wireless-router"}
                    >
                      Wireless Router
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      href={
                        process.env.PUBLIC_URL +
                        "/fiber-optic-networking-accessories"
                      }
                    >
                      Fiber Optic Networking Accessories
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      href={process.env.PUBLIC_URL + "/networking-cables"}
                    >
                      Networking Cables
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      href={
                        process.env.PUBLIC_URL + "/lan-networking-accessories"
                      }
                    >
                      Network Testing Equipment
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      href={process.env.PUBLIC_URL + "/catv-products"}
                    >
                      CATV Products
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      href={process.env.PUBLIC_URL + "/server-rack-cabinet"}
                    >
                      Server Rack &amp; Cabinet
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      href={process.env.PUBLIC_URL + "/accessories"}
                    >
                      Accessories
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      href={process.env.PUBLIC_URL + "/software-periphery"}
                    >
                      Software Periphery
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              {/* Solutions & Services */}
              <MDBNavItem>
                <a
                  style={{ fontWeight: "bold" }}
                  nav
                  caret
                  href={process.env.PUBLIC_URL + "/solutions_1"}
                >
                  Solutions &amp; Services
                </a>
              </MDBNavItem>

              {/* Training */}
              <MDBNavItem>
                <a
                  style={{ fontWeight: "bold" }}
                  nav
                  caret
                  href={process.env.PUBLIC_URL + "/training_list1"}
                >
                  Training
                </a>
              </MDBNavItem>

              {/* career */}
              <MDBNavItem>
                <a
                  style={{ fontWeight: "bold" }}
                  nav
                  caret
                  href={process.env.PUBLIC_URL + "/career"}
                >
                  Career
                </a>
              </MDBNavItem>

              {/* Contact Us */}
              <MDBNavItem>
                <a
                  style={{ fontWeight: "bold" }}
                  nav
                  caret
                  href={process.env.PUBLIC_URL + "/Contact_02"}
                >
                  Contact Us
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Mobilemenu;
