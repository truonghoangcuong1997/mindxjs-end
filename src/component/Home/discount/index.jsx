import React from "react";

const index = () => {
  return (
    <section className="discount_section  layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <h2>The Latest Collection</h2>
              <h2 className="main_heading">50% DISCOUNT</h2>
              <div className>
                <a href>Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/discount-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
