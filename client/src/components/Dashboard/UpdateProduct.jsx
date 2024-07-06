import React, { useState,useRef, useEffect } from 'react';
import { SuccessToast, getBase64 } from '../../helper/FormHelper';
import { ProductUpdateRequiest } from '../../API/AdminApiRequiest';
import { BrandListRequest, CategoryListRequest,DetailsListRequest } from '../../API/apiRequiest';
import SubmitButton from './../common/SubmitButton';
import { useNavigate, useParams,Link } from 'react-router-dom';

const UpdateProduct = () => {
    const [BtnLoader, SetBtnLoader] = useState(false);
    const [category,setCategory] = useState([]);
    const [brand,setBrand] = useState([]);
    const [product,setProduct] = useState()
    const navigate = useNavigate()
    const {id} = useParams()
    let titleRef,desRef,priceRef,discountRef,stockRef,remarkRef,categoryIDRef,brandIDRef,starRef,imageRef= useRef();

    useEffect(()=>{
        (async()=>{
            let proDetails = await DetailsListRequest(id)
            setProduct(proDetails[0])

            let brand = await BrandListRequest();
            setCategory(brand);

            let category = await CategoryListRequest();
            setBrand(category)
        })()
    },[])
console.log(product)
    
    const onSubmit = async () => {
        let title = titleRef.value;
        let shortDes = desRef.value;
        let price = priceRef.value;
        let discount = discountRef.value;
        let stock = stockRef.value;
        let star = starRef.value;
        let remark =remarkRef.value;
        let categoryID = categoryIDRef.value;
        let brandID = brandIDRef.value;
        let imageFile = imageRef.files[0];
        try {
            let image = await getBase64(imageFile);
            SetBtnLoader(true);

            await ProductUpdateRequiest(id, title, shortDes, price, discount,image, stock,star, remark, categoryID, brandID).then((res)=>{
                if (res && res.status === "success") {
                    SuccessToast("Update Success");
                    navigate("/productList")
                }
            })
        } catch (error) {
            console.error("Error updating product", error);
        } finally {
            SetBtnLoader(false);
        }
    };
    return (
        <div className='container'>
            <h3>Product Update</h3>
            <div className='row'>
                <div className="col-12 col-md-6 pb-3">
                    <label className='pb-2'>Product Title</label>
                    <input type="text" defaultValue={product?.title} ref={(input) => (titleRef = input)} className='form-control-sm form-control' />
                </div>
                <div className="col-12 col-md-6 pb-3">
                    <label className='pb-2'>Short Description</label>
                    <input type="text" defaultValue={product?.shortDes} ref={(input) => (desRef = input)} className='form-control-sm form-control' />
                </div>
                <div className="col-12 col-md-6 pb-3">
                    <label className='pb-2'>Price</label>
                    <input type="text" defaultValue={product?.price} ref={(input) => (priceRef = input)} className='form-control-sm form-control' />
                </div>
                <div className="col-12 col-md-6 pb-3">
                    <label className='pb-2'>Discount Price</label>
                    <input type="text" defaultValue={product?.discount} ref={(input) => (discountRef = input)}  className='form-control-sm form-control' />
                </div>
                <div className="col-12 col-md-6 pb-3">
                    <label className='pb-2'>Stock</label>
                    <input type="text" defaultValue={product?.stock} ref={(input) => (stockRef = input)} className='form-control-sm form-control' />
                </div>
                <div className="col-12 col-md-6 pb-3">
                    <label className='pb-2'>Star</label>
                    <input type="text" defaultValue={product?.star} ref={(input) => (starRef = input)} className='form-control-sm form-control' />
                </div>
                <div className="col-12 col-md-6 pb-3">
                    <label className='pb-2'>Remark</label>
                    <input type="text" defaultValue={product?.remark} ref={(input) => (remarkRef = input)} className='form-control-sm form-control' />
                </div>
                <div className="col-12 col-md-6 pb-3">
                    <label className='pb-2'>Brand</label>
                    <select ref={(input) => (brandIDRef = input)} className='form-control-sm  form-control'>
                        <option>Select one</option>
                        {
                            category.map((item,i)=>{
                                return(<option  value={item['_id']} key={item['_id']}>{item['brandName']}</option>)
                            })
                        }
                    </select>
                </div>
                <div className="col-12 col-md-6 pb-3">
                    <label className='pb-2'>Category</label>
                    <select ref={(input) => (categoryIDRef = input)} className='form-control-sm  form-control'>
                    <option>Select one</option>
                        {
                            brand.map((item,i)=>{
                                return(<option  value={item['_id']} key={item['_id']}>{item['categoryName']}</option>)
                            })
                        }
                    </select>
                </div>
                <div className="col-12 col-md-6">
                    <label className='pb-2'>Product Image</label>
                    <input type="file" ref={(input) => (imageRef = input)} defaultValue={product?.image} className='form-control-sm form-control' />
                </div>
                <div className='pt-2 col-md-12 d-flex justify-content-between'>
                    <SubmitButton submit={BtnLoader} onClick={onSubmit} className='btn btn-success' text="Submit"/>
                    <Link to="/productList" className='btn btn-outline-success'>Product List</Link>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;