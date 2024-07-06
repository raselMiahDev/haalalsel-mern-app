import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CategoryListRequest } from "../../API/apiRequiest.js";
import CartListSkeleton from "../../Skeleton/CategoriesSkeleton.jsx";
import {motion} from "framer-motion"
import { fadeInUp } from "../../helper/animation.js";

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await CategoryListRequest();
      setData(result);
    })();
  }, []);

  return (
    <motion.div initial={fadeInUp.initial} animate={fadeInUp.animate} transition={fadeInUp.transition} className="section">
      <div className="container py-4">
        <div className="row g-2">
          <h4 className="my-3 p-0">Shoping by category</h4>
          {
            data.length > 0 ? (
              data.map((item)=>{
                return(
                  <div className="col-4 col-md-2">
                    <Link to={"/product-by-category/" + item["_id"]} style={{ textDecoration: "none" }}>
                      <div className="custom_card rounded  border p-3">
                          <img src={item["categoryImg"]} alt="" width={100} height={100}/>
                          <div className="pt-3">
                            <span>{item["categoryName"]}</span>
                          </div>
                      </div>
                    </Link>
                </div>
                )
              })
            ):(<CartListSkeleton/>)
          }
        </div>
      </div>
    </motion.div>
  );
};

export default Categories;
