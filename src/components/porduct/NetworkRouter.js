import React, { Component } from "react";
import Header from "../layout/Header";

export class NetworkRouter extends Component {
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
                    <h1 className="title">Network Router</h1>
                  </div>
                  {/* /.page-title-captions */}
                </div>
              </div>
              {/* /.col-md-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        <div className="sidebar ttm-bgcolor-white clearfix">
          <div className="container-xl">
            {/* row */}

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="product">
                  {/* product */}
                  <div className="product-thumbnail">
                    {/* product-thumbnail */}
                    <img
                      className="img-fluid w-100"
                      src="https://i.imgur.com/jHv3oLr.png"
                      alt=""
                    />
                    <div className="ttm-shop-icon">
                      {/* ttm-shop-icon */}
                      <div className="product-btn add-to-cart-btn">
                        <a>View Details</a>
                      </div>
                    </div>
                  </div>
                  {/* product-thumbnail end */}
                  <div className="product-content text-left">
                    {/* product-content */}
                    <div className="product-title">
                      {/* product-title */}
                      <h2>
                        <a>MikroTik CCR1009-7G-1C-1S+</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="product">
                  {/* product */}
                  <div className="product-thumbnail">
                    {/* product-thumbnail */}
                    <img
                      className="img-fluid w-100"
                      src="https://i.imgur.com/2L4NomA.png"
                      alt=""
                    />
                    <div className="ttm-shop-icon">
                      {/* ttm-shop-icon */}
                      <div className="product-btn add-to-cart-btn">
                        <a>View Details</a>
                      </div>
                    </div>
                  </div>
                  {/* product-thumbnail end */}
                  <div className="product-content text-left">
                    {/* product-content */}
                    <div className="product-title">
                      {/* product-title */}
                      <h2>
                        <a>MikroTik CCR1009-7G-1C-1S+PC</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="product">
                  {/* product */}
                  <div className="product-thumbnail">
                    {/* product-thumbnail */}
                    <img
                      className="img-fluid w-100"
                      src="https://i.imgur.com/2L4NomA.png"
                      alt=""
                    />
                    <div className="ttm-shop-icon">
                      {/* ttm-shop-icon */}
                      <div className="product-btn add-to-cart-btn">
                        <a>View Details</a>
                      </div>
                    </div>
                  </div>
                  {/* product-thumbnail end */}
                  <div className="product-content text-left">
                    {/* product-content */}
                    <div className="product-title">
                      {/* product-title */}
                      <h2>
                        <a>MikroTik CCR1009-7G-1C-PC</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="product">
                  {/* product */}
                  <div className="product-thumbnail">
                    {/* product-thumbnail */}
                    <img
                      className="img-fluid w-100"
                      src="https://i.imgur.com/qdyAYNK.png"
                      alt=""
                    />
                    <div className="ttm-shop-icon">
                      {/* ttm-shop-icon */}
                      <div className="product-btn add-to-cart-btn">
                        <a>View Details</a>
                      </div>
                    </div>
                  </div>
                  {/* product-thumbnail end */}
                  <div className="product-content text-left">
                    {/* product-content */}
                    <div className="product-title">
                      {/* product-title */}
                      <h2>
                        <a>
                          <br />
                          MikroTik CCR1016-12G
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
    );
  }
}

export default NetworkRouter;

// href={process.env.PUBLIC_URL + "/Product_details"}
