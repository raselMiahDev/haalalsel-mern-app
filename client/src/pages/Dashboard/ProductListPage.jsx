import React, { useEffect, useState } from 'react';
import DashboardLayOut from '../../components/Dashboard/DashboardLayOut';
import { AllProductsRequest } from '../../API/apiRequiest';
import ProductList from '../../components/Dashboard/ProductList';
import ProductsSkeleton from "../../Skeleton/BrandsSkeleton";

const ProductListPage = () => {

    const [data,setData] = useState([]);
    useEffect(()=>{
        (async()=>{
            const result =await AllProductsRequest()
            setData(result)
        })();
    },[data])
    if (data.length === 0) {
        return (
          <DashboardLayOut>
            <ProductsSkeleton />
          </DashboardLayOut>
        );
      } else {
        return (
          <DashboardLayOut>
            <div className='container'>
                <h2>Product List</h2>
            <ProductList data={data} />
            </div>
          </DashboardLayOut>
        );
      }
};

export default ProductListPage;