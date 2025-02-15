import React from "react";
import Skeleton from "react-loading-skeleton";
import ImagePlaceholder from "../assets/images/image.json";
import Lottie from "lottie-react";
import "react-loading-skeleton/dist/skeleton.css";

const ProductsSkeleton = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h3>Your cart list is empty</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>color</th>
                <th>Size</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Lottie
                    className="w-25"
                    animationData={ImagePlaceholder}
                    loop={true}
                  />
                </td>
                <td>
                  <Skeleton count={3} />
                </td>
                <td>
                  <Skeleton count={3} />
                </td>
                <td>
                  <Skeleton count={3} />
                </td>
                <td>
                  <Skeleton count={3} />
                </td>
                <td>
                  <Skeleton count={3} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsSkeleton;
