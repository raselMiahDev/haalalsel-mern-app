import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BrandListRequest } from "../../API/apiRequiest.js";
import BrandsSkeleton from "../../Skeleton/BrandsSkeleton.jsx";

const Brands = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await BrandListRequest();
      setData(result);
    })();
  }, [0]);

  return (
    <div className="section">
      <div className="container">
        <div className="row mb-5">
          <h3 className="headline-4 my-2 p-0">Top Brands</h3>
          {data.length > 0 ? (
            data.map((item, i) => {
              return (
                <div
                  key={i}
                  className="col-4 col-md-2 col-lg-2 text-center col-md-8r p-2"
                >
                  <Link
                    to={"/product-by-brand/" + item["_id"]}
                    style={{ textDecoration: "none" }}
                    className="card h-100 rounded-3"
                  >
                    <div className="card-body">
                      <img className="w-50 h-50" src={item["brandImg"]} />
                      <p className="bodySmal mt-3">{item["brandName"]}</p>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <BrandsSkeleton/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brands;
