import React, { useState,useRef, useEffect } from 'react';
import { ErrorToast, IsEmpty, SuccessToast, getBase64 } from '../../helper/FormHelper';
import { CreateProductSliderRequiest} from '../../API/AdminApiRequiest';
import { AllProductsRequest } from '../../API/apiRequiest';
import SubmitButton from './../common/SubmitButton';

const CreateProductSlide = () => {
    const [product,setProduct] = useState([]);
    const [BtnLoader, SetBtnLoader] = useState(false);
    let imageRef= useRef();

    useEffect(()=>{
        (async()=>{
            let data = await AllProductsRequest()
            setProduct(data);
        })()
    },[0])

    const [formData,setFormData]=useState({
        title:"",
        short_des:"",
        price:"",
        productID:"" 
    })
    const onSubmit = async ()=>{
        const {title, short_des, price, productID} = formData;
        let imageFile = imageRef.files[0];


        let base64 =await getBase64(imageFile);

        if(IsEmpty(title)){
            ErrorToast("Title is reqired");
            return false;
        }else if(IsEmpty(short_des)){
            ErrorToast("des is reqired");
            return false;
        }else if(IsEmpty(price)){
            ErrorToast("price is reqired");
            return false;
        }else if(IsEmpty(productID)){
            ErrorToast("Product is reqired");
            return false;

        }else{
            SetBtnLoader(true);
            await CreateProductSliderRequiest(title, short_des, price, productID,base64).then((res)=>{
                if(res.status==true){
                    SuccessToast("Slider Create success");
                }
            })
            SetBtnLoader(false);
        }
    }
    const handleChange = (property,value)=>{
        setFormData({...formData,[property]:value});
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Product Title</label>
                    <input type="text" onChange={(e)=>handleChange("title",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Short Description</label>
                    <input type="text" onChange={(e)=>handleChange("short_des",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Price</label>
                    <input type="text" onChange={(e)=>handleChange("price",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Product</label>
                    <select onChange={(e)=>{handleChange("productID",e.target.value)}} className='form-control-sm  form-control'>
                        <option>Select one</option>
                        {
                            product.map((item,i)=>{
                                return(<option  value={item['_id']} key={item['_id']}>{item['title']}</option>)
                            })
                        }
                    </select>
                </div>

                <div className="col-md-12">
                    <label className='pb-2'>Product Image</label>
                    <input type="file" ref={(input) => (imageRef = input)} className='form-control-sm form-control' />
                </div>
                <div className='pt-4 col-md-6'>
                    <SubmitButton submit={BtnLoader} onClick={onSubmit} className='btn btn-success' text="Create"/>
                </div>
            </div>
        </div>
    );
};

export default CreateProductSlide;