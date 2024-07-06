import React, { useEffect, useState } from "react";
import {
  CartListRequest,
  InvoiceRequest,
  RemoveCartListRequest,
} from "../../API/apiRequiest.js";
import CartListSkeleton from "../../Skeleton/CartListSkeleton.jsx";
import toast, { Toaster } from "react-hot-toast";
import { Modal } from "react-bootstrap";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTocart } from "../../redux/slice/cartSlice.js";
import { Link } from 'react-router-dom';

const CartList = () => {
  const dispatch = useDispatch();
  const [data_new, setData_new] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [BtnLoader, SetBtnLoader] = useState(false);
  const [Payable, SetPayable] = useState(0);

  const [data_payment, setData_payment] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    CalculatePayable(); // Calculate payable when data_new changes
  }, [data_new]);

  useEffect(() => {
    (async () => {
      await CalculatePayable();
      let cartList = await CartListRequest();
      setData_new(cartList);
    })();
  }, [refresh]);

  const Remove = async (productID) => {
    setData_new([]);
    let data = await RemoveCartListRequest(productID);
    await dispatch(removeTocart(productID));
    if (data["status"] === "success") {
      toast.success(data["message"]);
    } else {
      toast.error(data["message"]);
    }
    setRefresh(1);
  };

  const CheckOut = async () => {
    SetBtnLoader(true);
    let payment = await InvoiceRequest();
    setShow(true);
    setData_payment(payment);

    SetBtnLoader(false);
  };

  const CalculatePayable = async () => {
    if (data_new.length !== 0) {
      let sum = 0;
      data_new.map((item, i) => {
        sum = sum + parseInt(item["price"]);
      });
      SetPayable(sum);
    }
  };

  return (
    <div className="section py-5 container">
      {data_new.length === 0 ? (
        <div>
          <CartListSkeleton />
          <Link to="/" className="btn btn-primary text-white">Continue shopping</Link>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-8">
              <table className="table table-responsive ">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {data_new.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          <img
                            width={80}
                            height={80}
                            className="product-img-sm rounded"
                            src={item["product"]["image"]}
                          />
                        </td>
                        <td>
                          <div className="mx-2">
                            <span>{item["product"]["title"]}</span>
                            <p>color: {item["color"]}</p>
                            <p>Size : {item["size"]}</p>
                          </div>
                        </td>
                        <td>{item["qty"]}</td>
                        <td>BDT {item["price"]}</td>
                        <td>
                          <button
                            onClick={() => {
                              Remove(item["productID"]);
                            }}
                            className="btn btn-danger btn-sm"
                          >
                            <MdDeleteSweep size={20} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="col-12 col-md-4 shadow rounded p-4 border-start border-primary">
              <div className="d-flex justify-content-between">
                <span>Total Amount</span>
                <hr />
                <h5>{Payable} BDT</h5>
              </div>
              <div className="py-3">
                <h5>Cash On Delivery</h5>
              </div>
              <button className="btn btn-primary">Place Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
