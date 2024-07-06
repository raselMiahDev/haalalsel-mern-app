import React, { useState,useRef, useEffect } from 'react';
import { ErrorToast, IsEmpty, SuccessToast, getBase64 } from '../../helper/FormHelper';
import { CreateProductDetailsRequiest } from '../../API/AdminApiRequiest';
import {AllProductsRequest} from "../../API/apiRequiest"
import SubmitButton from './../common/SubmitButton';
const AddProductDetails = () => {
    const [BtnLoader, SetBtnLoader] = useState(false);
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        (async()=>{
            let data = await AllProductsRequest()
            setProduct(data);
        })()
    },[0])
    let img1,img2,img3,img4,img5,img6,img7,img8= useRef();
    const [formData,setFormData]=useState({
        des:"",
        color:"",
        size:"",
        productID:""
    })
    const onSubmit = async ()=>{
        const {des, color, size, productID} = formData;
        let imageFile1 = img1.files[0];
        let imageFile2 = img2.files[0];
        let imageFile3 = img3.files[0];
        let imageFile4 = img4.files[0];
        let imageFile5 = img5.files[0];
        let imageFile6 = img6.files[0];
        let imageFile7 = img7.files[0];
        let imageFile8 = img8.files[0];

        let base64_1 =await getBase64(imageFile1);
        let base64_2 =await getBase64(imageFile2);
        let base64_3 =await getBase64(imageFile3);
        let base64_4 =await getBase64(imageFile4);
        let base64_5 =await getBase64(imageFile5);
        let base64_6 =await getBase64(imageFile6);
        let base64_7 =await getBase64(imageFile7);
        let base64_8 =await getBase64(imageFile8);
        if(IsEmpty(des)){
            ErrorToast("Description is reqired");
            return false;
        }else if(IsEmpty(color)){
            ErrorToast("Color is reqired");
            return false;
        }else if(IsEmpty(size)){
            ErrorToast("size is reqired");
            return false;
        }else if(IsEmpty(productID)){
            ErrorToast("Product is reqired");
            return false;

        }else{
            SetBtnLoader(true)
            await CreateProductDetailsRequiest(base64_1,base64_2,base64_3,base64_4,base64_5,base64_6,base64_7,base64_8,des, color, size, productID).then((res)=>{
                if(res.status==true){
                    SuccessToast("Slider Create success");
                }
            })
            SetBtnLoader(false)
        }
    }
    const handleChange = (property,value)=>{
        setFormData({...formData,[property]:value});
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-6">
                    <label className='pb-2'>Image-1</label>
                    <input type="file" ref={(input) => (img1 = input)}className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-2</label>
                    <input type="file" ref={(input) => (img2 = input)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-3</label>
                    <input type="file" ref={(input) => (img3 = input)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-4</label>
                    <input type="file" ref={(input) => (img4 = input)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-5</label>
                    <input type="file" ref={(input) => (img5= input)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-6</label>
                    <input type="file" ref={(input) => (img6 = input)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-7</label>
                    <input type="file" ref={(input) => (img7 = input)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Image-8</label>
                    <input type="file" ref={(input) => (img8 = input)}className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Description</label>
                    <input type="text" onChange={(e)=>handleChange("des",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Color</label>
                    <input type="text" onChange={(e)=>handleChange("color",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Size</label>
                    <input type="text" onChange={(e)=>handleChange("size",e.target.value)} className='form-control-sm form-control' />
                </div>
                <div className="col-md-6">
                    <label className='pb-2'>Product Id</label>
                    <select onChange={(e)=>{handleChange("productID",e.target.value)}}  className='form-control-sm form-control'>
                        <option value="">Select one</option>
                    {
                        product.map((item,i)=>{
                            return(<option  value={item['_id']} key={item['_id']}>{item['title']}</option>)
                        })}

                    </select>
                </div>

                <div className='pt-4 col-md-6'>
                    <SubmitButton onClick={onSubmit} submit={BtnLoader} text="Create Details" className='btn btn-success'></SubmitButton>
                </div>
            </div>
        </div>
    );
};

export default AddProductDetails;