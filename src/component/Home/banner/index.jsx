import React from "react";

const index = () => {
  return (
    <section className="slider_section">
      <div className="play_btn">
        <a href>
          <img src="images/play.png" alt="" />
        </a>
      </div>
      <div className="number_box">
        <div>
          <ol className="carousel-indicators indicator-2">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            >
              01
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to={1}>
              02
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to={2}>
              03
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to={3}>
              04
            </li>
          </ol>
        </div>
      </div>
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest
                      <span>Furniture</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                    <div className="btn-box">
                      <a href className="btn-1">
                        Read More
                      </a>
                      <a href className="btn-2">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 img-container">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest
                      <span>Furniture</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                    <div className="btn-box">
                      <a href className="btn-1">
                        Read More
                      </a>
                      <a href className="btn-2">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 img-container">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest
                      <span>Furniture</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                    <div className="btn-box">
                      <a href className="btn-1">
                        Read More
                      </a>
                      <a href className="btn-2">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 img-container">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest
                      <span>Furniture</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                    <div className="btn-box">
                      <a href className="btn-1">
                        Read More
                      </a>
                      <a href className="btn-2">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 img-container">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
