import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductByCategoryRequest } from "../API/apiRequiest";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import ProductList from "../components/Products/ProductsList";
import ProductsSkeleton from "../Skeleton/ProductsSkeleton";

const ProductByCategory = () => {
  let { category } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await ProductByCategoryRequest(category);
      setData(result);
    })();
  }, [0]);
  if (data.length === 0) {
    return (
      <MasterLayout>
        <ProductsSkeleton />
      </MasterLayout>
    );
  } else {
    return (
      <MasterLayout>
        <ProductList data={data} />
      </MasterLayout>
    );
  }
};

export default ProductByCategory;
