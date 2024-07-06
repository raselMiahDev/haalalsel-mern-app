import React from "react";
import { Link } from "react-router-dom";
import Payment from "../../assets/images/payment.png"
import Logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <div>
      <div className="section-bottom shadow-sm bg-dark">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <img src={Logo} className="w-75" alt="" />
            </div>
            <div className="col-md-4 ">
              <h4 className="bodyMedium text-white">Information</h4>
              <p className="my-2">
                <Link className="nav-link text-white" to="/">
                  How to buy
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link text-white" to="/">
                  Contact
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link text-white" to="/">
                  Complain
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="bodyMedium text-white">About</h4>
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum{" "}
              </p>
              <img
                className="w-75"
                src={Payment}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
