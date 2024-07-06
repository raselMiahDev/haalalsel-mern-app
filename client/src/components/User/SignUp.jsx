import { useState } from "react";
import Logo from "../../assets/images/signup.svg"
import { Link, useNavigate } from "react-router-dom";
import {UserSignUpRequest} from "../../API/apiRequiest"
import {IsEmail,IsEmpty,ErrorToast,SuccessToast} from "../../helper/FormHelper"
import SubmitButton from "../common/SubmitButton";
import { motion } from 'framer-motion';
import { fadeInUp } from "../../helper/animation.js";
const SignUp = () => {
    const navigate = useNavigate();
    const [BtnLoader, SetBtnLoader] = useState(false);
    const [formData,setFormData] = useState({
      fullName: "",
      phoneNumber: "",
      email:"",
      address:"",
      postCode:"",
      password: "",
    });
  
    const changeHandeler = (property,value) => {
        setFormData({
        ...formData, [property]:value
      });
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        // input validation
        let {fullName,
          phoneNumber,
          email,
          address,
          postCode,
          password } = formData;
        if (IsEmpty(fullName)) {
          return ErrorToast("Full Name is Required");
        } else if (IsEmpty(phoneNumber)) {
          return ErrorToast("Number is Required");
        } else if(IsEmail(email)){
          return ErrorToast("Email is Required");
        }else if(IsEmpty(address)){
          return ErrorToast("Address is Required");
        }else if(password.length === 0){
          return ErrorToast("Password is Required");
        }
         else {
          SetBtnLoader(true);
          const res = await UserSignUpRequest(fullName,
            phoneNumber,
            email,
            address,
            postCode,
            password );
          SetBtnLoader(false);
          if (res) {
            SuccessToast("Account Create Success")
            navigate("/login");
          }
        }
      };
    return (
        <motion.div initial={fadeInUp.initial} animate={fadeInUp.animate} transition={fadeInUp.transition} className='container py-5'>
            <div className="row">
                <div className="col-12 col-md-12">
                    <h3 className='pb-2'>Create an account</h3>
                    <div className="row">
                        <div className='pb-2 col-12 col-md-6'>
                            <label>Full Name</label>
                            <input type="text" onChange={(e)=>changeHandeler("fullName",e.target.value)} className='form-control'/>
                        </div>
                        <div className='pb-2 col-12 col-md-6'>
                            <label>Phone Number</label>
                            <input type="text" onChange={(e)=>changeHandeler("phoneNumber",e.target.value)} className='form-control'/>
                        </div>
                        <div className='pb-2 col-12 col-md-6'>
                            <label>Enter your email</label>
                            <input type="email" onChange={(e)=>changeHandeler("email",e.target.value)} className='form-control'/>
                        </div>
                        <div className='pb-2 col-12 col-md-6'>
                            <label>Address</label>
                            <input type="text" onChange={(e)=>changeHandeler("address",e.target.value)} className='form-control'/>
                        </div>
                        <div className='pb-2 col-12 col-md-6'>
                            <label>Post Code</label>
                            <input type="number" onChange={(e)=>changeHandeler("postCode",e.target.value)} className='form-control'/>
                        </div>
                        <div className='pb-2 col-12 col-md-6'>
                            <label>Password</label>
                            <input type="password" onChange={(e)=>changeHandeler("password",e.target.value)} className='form-control'/>
                        </div>
                        <div className='py-4 col-12 col-md-6'>
                            <SubmitButton submit={BtnLoader} onClick={onSubmit} className='btn btn-dark w-100' text="Register"/>
                        </div>
                        <div>
                          <span>Already have an account <Link className="btn text-primary" to="/login">Login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SignUp;