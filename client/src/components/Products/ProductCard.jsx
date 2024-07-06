import { Link } from "react-router-dom";
import ProductsSkeleton from "../../Skeleton/ProductsSkeleton";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import { FaWhatsappSquare } from "react-icons/fa";
const ProductCard = (props) => {
  return (
    <div className="container">
          <div className="row gy-5">
            {props.data.length > 0 ? (
              props.data.map((item, i) => {
                let price = <span>${item["price"]} </span>;
                if (item["discount"] === true) {
                  price = (
                    <p className="bodyMedium  text-dark my-1">
                      Price: <strike>${item["price"]}</strike> $
                      {item["discountPrice"]}
                    </p>
                  );
                }
                return (
                  <div key={item['_id']} className="col-12 col-md-3 d-flex  justify-content-center">
                    <div
                      className="rounded card shadow-sm position-relative bg-white"
                      style={{ width: "30rem", cursor: "pointer" }}
                    >
                      <div className="position-absolute top-0 end-0 m-2">
                        <span
                          style={{ backgroundColor: "#112D4E" }}
                          className=" p-1 text-white"
                        >
                          New
                        </span>
                      </div>
                      <Link to={"/details/" + item["_id"]}>
                        <img src={item['image']} className="card-img-top" height={270}  alt="..." />
                      </Link>
                      <div className="card-body px-2 pb-2">
                        <div>
                          <Link
                            to={"/details/" + item["_id"]}
                            style={{ textDecoration: "none" }}
                          >
                            <h6 className="card-title py-2">{item["title"]}</h6>
                          </Link>

                          <p>
                            <span>{price}</span>
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <StarRatings
                            rating={parseFloat(item?.["star"])}
                            starRatedColor="orange"
                            starDimension="17px"
                            starSpacing="1px"
                          />
                          <div className="d-flex gap-2">
                            <a href="https://wa.me/qr/UZQT5H576T6RC1 " target="_blank" rel="noopener noreferrer">
                            <FaWhatsappSquare color="orange" size={23} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <ProductsSkeleton />
            )}
          </div>
        </div>
  );
};

export default ProductCard;
