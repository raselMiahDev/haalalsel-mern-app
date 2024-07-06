import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import CustomModal from "../common/Modal";
const ProductCardTwo = (props) => {
    const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <section className="section-white small-padding-bottom" id="team">
        <div className="container">
          <div className="row">
                <div className="item">
                  {props.data.length > 0
                    ? props.data.map((item) => {
                        let price = <span>৳ {item["price"]} </span>;
                        if (item["discount"] === true) {
                          price = (
                            <p className="bodyMedium  text-dark my-1">
                              Price:৳ <strike>{item["price"]}</strike> ৳
                              {item["discountPrice"]}
                            </p>
                          );
                        }
                        return (
                          <div className="col-sm-5 team-item">
                            <div className="team-popup">
                              <Link to={"/details/" + item["_id"]}>
                                <img
                                  src={item["image"]}
                                  className="width-100"
                                  alt="pic"
                                />
                              </Link>
                              <div className="team-popup-overlay">
                                <div className="team-icon">
                                  <Link
                                    className="p-2 bg-warning rounded"
                                    to={"/details/" + item["_id"]}
                                  >
                                    <IoEyeOutline width={500} color="white" />
                                  </Link>
                                  <a className="p-2 bg-warning rounded"onClick={() => setModalShow(true)}>
                                        <FiPhoneCall width={500} color="white" />
                                    </a>
                                    <CustomModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                              </div>
                            </div>
                            <div className="team-box">
                              <Link
                                to={"/details/" + item["_id"]}
                                style={{ textDecoration: "none" }}
                              >
                                <h3 className="card-title py-2">
                                  {item["title"]}
                                </h3>
                              </Link>
                              <p className="team-info">{price}</p>
                            </div>
                          </div>
                        );
                      })
                    : "No data found"}
                </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default ProductCardTwo;
