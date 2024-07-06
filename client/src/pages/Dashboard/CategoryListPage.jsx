import React, { useEffect, useState } from 'react';
import DashboardLayOut from '../../components/Dashboard/DashboardLayOut';
import { CategoryListRequest } from '../../API/apiRequiest';
import ProductsSkeleton from "../../Skeleton/BrandsSkeleton";
import CategoryList from './../../components/Dashboard/CategoryList';
const CategoryListPage = () => {
    const [data,setData] = useState([]);
    const [id,setID] = useState(null)
    useEffect(()=>{
        (async()=>{
            const result =await CategoryListRequest()
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
                <h2>Category List</h2>
            <CategoryList data={data} />
            </div>
          </DashboardLayOut>
        );
      }
};

export default CategoryListPage;