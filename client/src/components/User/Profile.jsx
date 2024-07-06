import React, {useState} from 'react';
import {UpdateProfileRequest} from "../apiRequest/apiRequest.js";
import toast, { Toaster } from "react-hot-toast";
import SubmitButton from "./SubmitButton.jsx";
const Profile = () => {
    const [BtnLoader, SetBtnLoader] = useState(false);
    const [formData,setFormDate] = useState({
        cus_name:"",
        cus_add:"",
        cus_city:"",
        cus_state:"",
        cus_postcode:"",
        cus_phone:"",

        ship_name:"",
        ship_add:"",
        ship_phone:""
    })
    const formValidation = (value) => {
      return value.length===0
    }
    const updateProfile = async () => {
        let {cus_name,cus_add,cus_city,cus_state,cus_postcode,cus_phone,ship_name,ship_add,ship_phone} = formData
        if(formValidation(cus_name)){
            toast.error("Name is required")
            return false
        }else if(formValidation(cus_add)){
            toast.error("Address is required")
            return false
        }else if(formValidation(cus_city)){
            toast.error("City is required")
            return false
        }else if(formValidation(cus_state)){
            toast.error("State is required")
            return false
        }else if(formValidation(cus_postcode)){
            toast.error("cus_postcode is required")
            return false
        }else if(formValidation(cus_phone)){
            toast.error("cus_phone is required")
            return false
        }else if(formValidation(ship_name)){
            toast.error("ship_name is required")
            return false
        }else if(formValidation(ship_add)){
            toast.error("ship_add is required")
            return false
        }else if(formValidation(ship_phone)){
            toast.error("ship_phone is required")
            return false
        }else {
            SetBtnLoader(true)
            let res= await UpdateProfileRequest({cus_name,cus_add,cus_phone,cus_postcode,cus_state,cus_city,ship_add,ship_name,ship_phone})
            SetBtnLoader(false)
            if(res['status']==="success"){
                toast.success("Save Changes")
            }
        }
    }

    const changeHandaler=(property,value)=>{
        setFormDate({...formData,[property]:value})
    }
    return (
        <div>
            <div className="row py-3">
                <div className="col-md-6">
                    <label className="form-label text-black-50">Full Name</label>
                    <input onChange={(e)=>changeHandaler('cus_name',e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label text-black-50">City</label>
                    <input onChange={(e)=>changeHandaler('cus_city',e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col-md-6 pt-3">
                    <label className="form-label text-black-50">Post Code</label>
                    <input onChange={(e)=>changeHandaler('cus_postcode',e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col-md-6 pt-3">
                    <label className="form-label text-black-50">Phone Number</label>
                    <input onChange={(e)=>changeHandaler('cus_phone',e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col-md-6 pt-3">
                    <label className="form-label text-black-50">State</label>
                    <input onChange={(e)=>changeHandaler('cus_state',e.target.value)} type="text" className="form-control" />
                </div>
                <div className="col-md-6 pt-3">
                    <label className="form-label text-black-50">Address</label>
                    <input onChange={(e)=>changeHandaler('cus_add',e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="col-md-6 pt-3">
                    <label className="form-label text-black-50">Shipment Name</label>
                    <input onChange={(e)=>changeHandaler('ship_name',e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col-md-6 pt-3">
                    <label className="form-label text-black-50">Shipment Address</label>
                    <input onChange={(e)=>changeHandaler('ship_add',e.target.value)} type="text" className="form-control" />
                </div>
                <div className="col-md-6 pt-3">
                    <label className="form-label text-black-50">Shipment Phone</label>
                    <input onChange={(e)=>changeHandaler('ship_phone',e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col-md-12 pt-3">
                    <SubmitButton submit={BtnLoader} text="Update info"  onClick={updateProfile} className="btn btn-success"/>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default Profile;