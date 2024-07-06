import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import { TbJewishStar } from "react-icons/tb";

const ProductsList = (props) => {
  return (
    <div>
      <div className="container py-5">
        <div className="row g-3">
          {props.data.map((item, i) => {
            // let price = (
            //   <p className="bodyMedium  text-dark my-1">
            //     Price: ৳ {item["price"]}{" "}
            //   </p>
            // );
            // if (item["discount"] === true) {
            //   price = (
            //     <p className="bodyMedium  text-dark my-1">
            //       Price: <strike>${item["price"]}</strike> $
            //       {item["discountPrice"]}
            //     </p>
            //   );
            // }

            return (
              <div className="col-md-12 col-12">
                <div className="card d-flex justify-content-center">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <img src={item["image"]} className="w-100 h-100"/>
                    </div>

                    <div className="col-12 col-md-8 py-3 px-5">
                      <div className="d-flex justify-content-between">
                        <h6 className="w-75">{item["title"]}</h6>
                        <p className="p-1 border text-primary">
                          <TbJewishStar size={20} />
                        </p>
                      </div>
                      <div className="pt-2">
                        <p className="fw-bold">৳ {item["price"]}</p>
                      </div>
                      <div className="d-flex gap-3">
                        <StarRatings
                          rating={parseFloat(item["star"])}
                          starRatedColor="red"
                          starDimension="15px"
                          starSpacing="4px"
                        />
                        <p className="text-success">Free Shipping</p>
                      </div>
                      <div>
                        <p>{item["shortDes"]}</p>
                      </div>

                      <div>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={"/details/" + item["_id"]}
                        >
                          <button className="btn p-0 text-primary">
                            View details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
