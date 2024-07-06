import React, { useEffect, useState } from "react";
import { SliderListRequest } from "../../API/apiRequiest.js";
import { Link } from "react-router-dom";
import SliderSkeleton from "../../Skeleton/SliderSkeleton.jsx";

const HeroSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await SliderListRequest();
      setData(result);
    })();
  }, []);

  return (
    <div
      id="carouselExampleDark"
      className="carousel hero-bg carousel-dark slide rounded"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {data.length > 0 ? (
          data.map((item, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))
        ) : (
          "No Data Found"
        )}
      </div>
      <div className="carousel-inner">
        {data.length > 0
          ? data.map((item, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                      <h1 className="headline-1">{item["title"]}</h1>
                      <p>{item["short_des"]}</p>
                      <h5>Price : {item['price']}</h5>
                      <Link
                        to={"/details/" + item["_id"]}
                        className="btn btn-dark text-white px-5 mt-3"
                      >
                        Buy Now
                      </Link>
                    </div>
                    <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                      <img src={item["img"]} className="w-100" height={400} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>

      <button
        className="carousel-control-prev btn rounded-5"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next btn"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSlider;
