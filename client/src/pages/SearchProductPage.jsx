import React, { useEffect, useState } from "react";
import MasterLayout from "./../components/MasterLayout/MasterLayout";
import ProductCard from "../components/Products/ProductCard";
import { useParams } from "react-router-dom";
import { ProductBySearchRequest } from "../API/apiRequiest";
import ProductsSkeleton from "../Skeleton/ProductsSkeleton";
import ProductsList from "../components/Products/ProductsList";

const SearchProductPage = () => {
  const [data, setData] = useState([]);
  let { keyword } = useParams();
  useEffect(() => {
    (async () => {
      const result = await ProductBySearchRequest(keyword);
      setData(result);
    })();
  }, []);
  if (data.length === 0) {
    return (
      <MasterLayout>
        <ProductsSkeleton />
      </MasterLayout>
    );
  } else {
    return (
      <MasterLayout>
        <div className="bg-light">
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-md-1 col-lg-1">Brand</div>
              <div className="col-12 col-md-11 col-lg-11">
                <div class="alert alert-primary" role="alert">
                  {data.length} <span>Items match your search</span>
                </div>
                <ProductsList data={data} />
              </div>
            </div>
          </div>
        </div>
      </MasterLayout>
    );
  }
};

export default SearchProductPage;
