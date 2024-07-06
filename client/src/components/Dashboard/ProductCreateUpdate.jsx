import React, { useState,useRef, useEffect } from 'react';
import { ErrorToast, IsEmpty, SuccessToast, getBase64 } from '../../helper/FormHelper';
import { CreateProductRequiest } from '../../API/AdminApiRequiest';
import { BrandListRequest, CategoryListRequest } from '../../API/apiRequiest';
import SubmitButton from './../common/SubmitButton';
import { useNavigate } from 'react-router-dom';

const ProductCreateUpdate = () => {
    const [BtnLoader, SetBtnLoader] = useState(false);
    const [category,setCategory] = useState([]);
    const [brand,setBrand] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        (async()=>{
            let brand = await BrandListRequest();
            setCategory(brand);

            let category = await CategoryListRequest();
            setBrand(category)
        })()
    },[0])
    let imageRef= useRef();
    const [formData,setFormData]=useState({
        title:"",
        des:"",
        price:"",
        discount:"",
        stock:"",
        star:"",
        remark:"",
        categoryID:"",
        brandID:"",
    })
    const onSubmit = async ()=>{
        const {title,des,price,discount,stock,remark,categoryID,brandID,star} = formData;
        let imageFile = imageRef.files[0];

        let base64 =await getBase64(imageFile);
        if(IsEmpty(title)){
            ErrorToast("Title is reqired");
            return false;
        }else if(IsEmpty(des)){
            ErrorToast("des is reqired");
            return false;
        }else if(IsEmpty(price)){
            ErrorToast("price is reqired");
            return false;
        }else if(IsEmpty(discount)){
            ErrorToast("discount is reqired");
            return false;
        }else if(IsEmpty(stock)){
            ErrorToast("stock is reqired");
            return false;
        }else if(IsEmpty(star)){
            ErrorToast("star is reqired");
            return false;
        }
        else if(IsEmpty(remark)){
            ErrorToast("remark is reqired");
            return false;
        }else if(IsEmpty(categoryID)){
            ErrorToast("categoryID is reqired");
            return false;
        }else if(IsEmpty(brandID)){
            ErrorToast("brandID is reqired");
            return false;
        }else if(IsEmpty(imageRef)){
            ErrorToast("image is reqired");
            return false;
        }else{
            SetBtnLoader(true);
            await CreateProductRequiest(title,des,price,discount,stock,star,remark,categoryID,brandID,base64).then((res)=>{
                if(res.status==true){
                    SuccessToast(res.message);
                    navigate("/productList")
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
                    <input type="text" onChange={(e)=>handleChange("des",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Price</label>
                    <input type="text" onChange={(e)=>handleChange("price",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Discount Price</label>
                    <input type="text" onChange={(e)=>handleChange("discount",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Stock</label>
                    <input type="text" onChange={(e)=>handleChange("stock",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Star</label>
                    <input type="text" onChange={(e)=>handleChange("star",e.target.value)} placeholder='Star' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Remark</label>
                    <input type="text" onChange={(e)=>handleChange("remark",e.target.value)} placeholder='Name' className='form-control-sm form-control' />
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Brand</label>
                    <select onChange={(e)=>{handleChange("brandID",e.target.value)}} className='form-control-sm  form-control'>
                        <option>Select one</option>
                        {
                            category.map((item,i)=>{
                                return(<option  value={item['_id']} key={item['_id']}>{item['brandName']}</option>)
                            })
                        }
                    </select>
                </div>
                <div className="col-md-6 pb-3">
                    <label className='pb-2'>Category</label>
                    <select name="" onChange={(e)=>{handleChange("categoryID",e.target.value)}} className='form-control-sm  form-control'>
                    <option>Select one</option>
                        {
                            brand.map((item,i)=>{
                                return(<option  value={item['_id']} key={item['_id']}>{item['categoryName']}</option>)
                            })
                        }
                    </select>
                </div>

                <div className="col-md-12">
                    <label className='pb-2'>Product Image</label>
                    <input type="file" ref={(input) => (imageRef = input)} className='form-control-sm form-control' />
                </div>
                <div className='pt-4 col-md-6'>
                    <SubmitButton submit={BtnLoader} onClick={onSubmit} className='btn btn-success' text="Add Product"/>
                </div>
            </div>
        </div>
    );
};

export default ProductCreateUpdate;