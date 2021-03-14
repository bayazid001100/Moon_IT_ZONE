import React, { Component } from "react";
import Header from "../layout/Header";

export class FiberOpticNetworkingAccessories extends Component {
  render() {
    return (
      <div className="site-main">
        <Header />
        {/* page-title */}
        <div className="ttm-page-title-row">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12">
                <div className="title-box text-center">
                  <div className="page-title-heading">
                    <h1 className="title">
                      Fiber Optic Networking Accessories
                    </h1>
                  </div>
                  {/* /.page-title-captions */}
                  <div className="breadcrumb-wrapper">
                    <h5>Coming Soon.....</h5>
                  </div>
                </div>
              </div>
              {/* /.col-md-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
      </div>
    );
  }
}

export default FiberOpticNetworkingAccessories;
