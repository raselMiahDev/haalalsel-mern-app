import React, { useEffect, useState } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import { useParams } from "react-router-dom";
import { ProductByBrandRequest } from "../API/apiRequiest";
import ProductsSkeleton from "../Skeleton/ProductsSkeleton";
import ProductList from "../components/Products/ProductsList";

const ProductByBrand = () => {
  let { brand } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await ProductByBrandRequest(brand);
      setData(result);
    })();
  }, [0]);

  if (data.length === 0) {
    return (
      <MasterLayout>
        <ProductsSkeleton />;
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

export default ProductByBrand;
