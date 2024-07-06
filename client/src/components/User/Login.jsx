import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserLoginRequest } from "../../API/apiRequiest.js";
import SubmitButton from "../common/SubmitButton.jsx";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { fadeInUp } from "../../helper/animation.js";
const Login = () => {
  const [BtnLoader, SetBtnLoader] = useState(false);
  const [formData,setFormData] = useState({
    phoneNumber: "",
    password: "",
  });
  const changeHandeler = (property,value) => {
    setFormData({
    ...formData, [property]:value
  });
};


  const onSubmit = async (e) => {
    e.preventDefault();
    let {phoneNumber,password} = formData
    if (phoneNumber.length === 0) {
      toast.error("Email required");
    } else {
      SetBtnLoader(true);
      let res = await UserLoginRequest(phoneNumber,password);
      SetBtnLoader(false);
      if (res["success"] === true) {
        toast.success(res["message"]);
        localStorage.setItem("login",'1')
        if(sessionStorage.getItem("lastLocation") !== null){
          window.location.href=sessionStorage.getItem("lastLocation")
        }else{
          window.location.href="/"
        }
      } else {
        toast.error("Email or password invalid");
      }
    }
  };
  return (
    <motion.div initial={fadeInUp.initial} animate={fadeInUp.animate} transition={fadeInUp.transition} className="py-5 px-2">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          {/* card start  */}
          <div className="card shadow-sm p-4">
            <div className=" py-2 md-py-3">
              <h4 className="text-center">Login </h4>
            </div>

            <div className="card-body">
              <form>
                <label className="form-label my-2">Your Phone Number</label>
                <input
                  type="email" onChange={(e)=>changeHandeler("phoneNumber",e.target.value)}
                  className="form-control" placeholder="Number"
                />
                <label className="form-label my-1">Password</label>
                <input
                  placeholder="password"
                  type="password" onChange={(e)=>changeHandeler("password",e.target.value)}
                  className="form-control"
                />
                <SubmitButton
                  submit={BtnLoader}
                  text="Login"
                  onClick={onSubmit}
                  className="btn my-3 btn-dark w-100"
                />
              </form>
              <div>
                <span>Create an account <Link to="/signUp" className="btn text-primary">Register</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position={"bottom-center"} />
    </motion.div>
  );
};

export default Login;
