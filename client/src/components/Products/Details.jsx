import React, { useEffect, useState } from "react";
import {
  CreateCartListRequest,
  CreateWishListRequest,
} from "../../API/apiRequiest.js";
import { useParams } from "react-router-dom";
import SmilierProduct from "./SmilierProduct.jsx";
import Brands from "../Home/Brands.jsx";
import ProductImages from "./ProductsImages.jsx";
import Specifications from "./Specifications.jsx";
import Review from "./Review.jsx";
import toast, { Toaster } from "react-hot-toast";
import SubmitButton from "../common/SubmitButton.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice.js";
import axios from "axios";
const Details = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartData, setCartData] = useState({
    productID: id,
    qty: 1,
    color: "",
    size: "",
  });
  const [BtnLoader, SetBtnLoader] = useState(false);

  const inputOnChange = (name, value) => {
    setCartData((cartData) => ({
      ...cartData,
      [name]: value,
    }));
  };
  useEffect(() => {
    (async () => {
          let result = await axios.get("http://localhost:5000/api/v1/ProductDetails/"+id);
          let data = result.data["data"];
          console.log("details" + data);
          setData(data);
      setImages([
        {
          original: data[0]["details"]["img1"],
          thumbnail: data[0]["details"]["img1"],
        },
        {
          original: data[0]["details"]["img2"],
          thumbnail: data[0]["details"]["img2"],
        },
        {
          original: data[0]["details"]["img3"],
          thumbnail: data[0]["details"]["img3"],
        },
        {
          original: data[0]["details"]["img4"],
          thumbnail: data[0]["details"]["img4"],
        },
        {
          original: data[0]["details"]["img5"],
          thumbnail: data[0]["details"]["img5"],
        },
        {
          original: data[0]["details"]["img6"],
          thumbnail: data[0]["details"]["img6"],
        },
        {
          original: data[0]["details"]["img7"],
          thumbnail: data[0]["details"]["img7"],
        },
        {
          original: data[0]["details"]["img8"],
          thumbnail: data[0]["details"]["img8"],
        },
      ]);
      const colorArray = data[0]["details"]["color"].split(",");
      setColor(colorArray);

      const sizeArray = data[0]["details"]["size"].split(",");
      setSize(sizeArray);
    })();
  }, [0]);
  const incrementQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const AddCart = async () => { 
      SetBtnLoader(true);

      let res = await CreateCartListRequest(cartData);
      await dispatch(addToCart(cartData))
      SetBtnLoader(false);
      if (res["status"] === "success") {
        toast.success(res["message"]);
      } else {
        toast.error("Please login first");
      }
  };

  const AddWish = async () => {
    SetBtnLoader(true);
    let res = await CreateWishListRequest(id);
    SetBtnLoader(false);
    if (res["status"] === "success") {
      toast.success(res["message"]);
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="section container">
      <div className="mt-3">
        <div className="row">
          <div className="col-md-7">
            <ProductImages images={images} />
          </div>

          <div className="col-md-5 p-4">
            <h3>{data[0] ? data[0]["title"] : ""}</h3>
            <p className="bodySmal mb-2 mt-1">
              {data[0] ? data[0]["shortDes"] : ""}
            </p>
            <h4 className="text-success">
              {(() => {
                if (data[0]) {
                  if (data[0]["discount"] === true) {
                    return (
                      <p>
                        <del>
                          ${data[0]["price"]}
                        </del>{" "}
                        {data[0]["discountPrice"]}
                      </p>
                    );
                  } else {
                    return <span>${data[0]["price"]}</span>;
                  }
                }
              })()}
            </h4>
            <div className="row">
              <div className="col-4 p-2">
                <label className="bodySmal">Size</label>
                <select
                  value={cartData["size"]}
                  onChange={(e) => {
                    inputOnChange("size", e.target.value);
                  }}
                  className="form-control my-2 form-select"
                >
                  <option value="">Choose Size</option>
                  {size.map((item, i) => {
                    return (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-4  p-2">
                <label className="bodySmal">Color</label>
                <select
                  value={cartData["color"]}
                  onChange={(e) => {
                    inputOnChange("color", e.target.value);
                  }}
                  className="form-control my-2 form-select"
                >
                  <option value="">Choose Color</option>
                  {color.map((item, i) => {
                    return (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-4  p-2">
                <label className="bodySmal">Quantity</label>
                <div className="input-group my-2">
                  <button
                    onClick={decrementQuantity}
                    className="btn btn-outline-secondary"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    onChange={(e) => {
                      inputOnChange("qty", e.target.value);
                    }}
                    type="text"
                    value={quantity}
                    className="form-control bg-light text-center"
                    readOnly
                  />
                  <button
                    onClick={incrementQuantity}
                    className="btn btn-outline-secondary"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-4  p-2">
                <SubmitButton
                  onClick={AddCart}
                  text="Add to Cart"
                  submit={BtnLoader}
                  className="btn w-100 btn-dark"
                />
              </div>
              <div className="col-4  p-2">
                <SubmitButton
                  onClick={AddWish}
                  text="Add to wish"
                  submit={BtnLoader}
                  className="btn w-100 btn-outline-dark"
                />
              </div>
              <div className="py-3">
                <h3>Contact : 01705-057053</h3>
              </div>
            </div>
            {/* Brand & category name */}
            <div className="">
              <p>
                <strong className="fw-bold">Category: </strong> {data[0] ? data[0]["category"]["categoryName"] : ""}
              </p>
              <p>
               <strong> Brand: </strong>{data[0] ? data[0]["brand"]["brandName"] : ""}
              </p>
            </div>
          </div>
        </div>

        <div className="row my-3 container">
          <ul className="nav nav-pills pb-3 gap-2" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link bg-dark px-5 active"
                id="Speci-tab"
                data-bs-toggle="tab"
                data-bs-target="#Speci-tab-pane"
                type="button"
                role="tab"
                aria-controls="Speci-tab-pane"
                aria-selected="true"
              >
                Specifications
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link bg-dark px-5"
                id="Review-tab"
                data-bs-toggle="tab"
                data-bs-target="#Review-tab-pane"
                type="button"
                role="tab"
                aria-controls="Review-tab-pane"
                aria-selected="false"
              >
                Review
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="Speci-tab-pane"
              role="tabpanel"
              aria-labelledby="Speci-tab"
              tabIndex="0"
            >
              <Specifications data={data} />
            </div>
            <div
              className="tab-pane fade"
              id="Review-tab-pane"
              role="tabpanel"
              aria-labelledby="Review-tab"
              tabIndex="0"
            >
              <Review />
            </div>
          </div>
        </div>
      </div>

      {data[0] ? <SmilierProduct categoryID={data[0]["categoryID"]} /> : ""}

      <Brands />
    </div>
  );
};

export default Details;
