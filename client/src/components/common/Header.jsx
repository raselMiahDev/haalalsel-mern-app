import React, {useEffect, useState} from "react";
import logo from "../../assets/images/logo.svg";
import {Link,} from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
// import toast, { Toaster } from 'react-hot-toast';
// import {useNavigate} from "react-router-dom"
import SubmitButton from "./SubmitButton.jsx";
import TopHeader from "./TopHeader.jsx";
// import {UserLogout} from "../apiRequest/apiRequest.js";
const Header = () => {
//   const [searchKeyword,setSearchKeyword]=useState("")
//   const [logoutLoader,setLogoutLoader]=useState(false);

//   const navigate = useNavigate();
//   const onSearch = () => {
//     if(searchKeyword.length===0){
//       toast.error("Search Keyword Required!");
//     }
//     else{
//       navigate("/product-by-search/"+searchKeyword)
//     }
//   }

//   const Logout = async () => {
//     setLogoutLoader(true)
//     localStorage.clear()
//     sessionStorage.clear()
//     await UserLogout()
//     setLogoutLoader(false);
//     window.location.href="/"
//   }


  return (
    <div>
      <TopHeader/>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom py-2">
        <div className="container text-center">
          <Link to="/" className="navbar-brand" href="#">
            <h4 className="text-primary">Halal-Seles.com</h4>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item"> <Link to="/" className="nav-link fs-5" >Home</Link></li>
            </ul>

            <form className="d-flex gap-1">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-dark" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 24, height: 24 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </form>

            <div className="d-flex py-2 md-py-0">
              <Link to="/cart" type="button" className="btn ms-3 btn-outline-primary position-relative">
                <BsCart2 />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">02</span>
              </Link>
              {
              (()=>{
                if(localStorage.getItem("login")==="1"){
                  return(
                      <>
                        <Link to="/user-profile" type="button" className="btn ms-3 btn-primary "><i className="bi mx-1 bi-person"></i> Profile</Link>
                        <SubmitButton submit={logoutLoader} onClick={Logout} text="Logout" type="button" className="btn ms-3 btn-primary">
                          <i className="bi mx-1 bi-person"></i> Logout
                        </SubmitButton>
                      </>
                  )
                }else {
                  return (
                      <Link to="/login" type="button" className="btn ms-3 btn-success d-flex"><i className="bi mx-1 bi-person"></i> Login</Link>
                  )
                }
              })()
            }
            </div>


          </div>
        </div>
      </nav>

    </div>
  );
};

export default Header;
