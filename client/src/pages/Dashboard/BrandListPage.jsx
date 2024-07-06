import React, { useEffect, useState } from 'react';
import DashboardLayOut from '../../components/Dashboard/DashboardLayOut';
import { BrandListRequest } from '../../API/apiRequiest';
import ProductsSkeleton from "../../Skeleton/BrandsSkeleton";
import BrandList from './../../components/Dashboard/BrandList';
const BrandListPage = () => {
    const [data,setData] = useState([]);
    const [id,setID] = useState(null)
    useEffect(()=>{
        (async()=>{
            const result =await BrandListRequest()
            setData(result)
            setID(result.data)
        })();
    },[id])

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
                <h2>Brand List</h2>
            <BrandList data={data} />
            </div>
          </DashboardLayOut>
        );
      }
};

export default BrandListPage;