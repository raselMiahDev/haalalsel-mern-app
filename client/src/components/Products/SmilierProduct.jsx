import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {ListBySmilierRequest} from "../../API/apiRequiest";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import { FaWhatsappSquare } from "react-icons/fa";
const SmilierProduct = (props) => {
    const [data,setData]=useState([])
    useEffect(()=>{
        (async () => {
            let result= await ListBySmilierRequest(props.categoryID);
            setData(result);
        })()

    },[0])

    return (
        <div className="section">
            <div className="container p-4">
                <div className="row">
                    <h2 className="headline-4 my-4 p-0">Related Products</h2>
                    {
                        data.length>0?(
                            data.map((item,i)=>{
                                let price = <span>${item["price"]} </span>;
                                if (item["discount"] === true) {
                                  price = (
                                    <p className="bodyMedium  text-dark my-1">
                                      Price: <strike>${item["price"]}</strike> $
                                      {item["discountPrice"]}
                                    </p>
                                  );
                                }
                                return(
                                    <div className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                        <Link to={"/details/" + item["_id"]}  style={{ textDecoration: "none" }} className="card shadow-sm h-100 rounded-3 bg-white">
                                            <img src={item['image']} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                            <h6 className="card-title py-2">{item["title"]}</h6>
                                                {price}
                                                <div className="d-flex justify-content-between">
                                                    <StarRatings
                                                        rating={parseFloat(item["star"])}
                                                        starRatedColor="orange"
                                                        starDimension="17px"
                                                        starSpacing="1px"
                                                    />
                                                    <div className="d-flex gap-2">
                                                        <a href="tel:+8801715972211">
                                                        <FaWhatsappSquare color="orange" size={23} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        ):(<span className="text-center">No Data Found</span>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SmilierProduct;