import React, { useRef, useState, useEffect } from "react";
import { BrandUpdateRequiest } from "../../API/AdminApiRequiest";
import { BrandDetailsByIdRequest } from "../../API/apiRequiest";
import toast, { Toaster } from "react-hot-toast";
import { getBase64 } from "../../helper/FormHelper";
import SubmitButton from "../common/SubmitButton";
import { useNavigate, useParams } from "react-router-dom";

const BrandUpdate = () => {
  const [brand, setBrand] = useState();
  let nameRef,
    imageRef,
    brandImageView = useRef();
  const [BtnLoader, SetBtnLoader] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const result = await BrandDetailsByIdRequest(id);
      setBrand(result[0]);
    })();
  }, []);

  const previewImage = () => {
    let imageFile = imageRef.files[0];
    getBase64(imageFile).then((res) => {
      brandImageView.src = res;
    });
  };

  const onSubmit = async () => {
    let name = nameRef.value;
    let imageFile = imageRef.files[0];
    try {
      SetBtnLoader(true);
      const base64Image = await getBase64(imageFile);
      await BrandUpdateRequiest(id, name, base64Image).then((res) => {
        if (res && res.status === "success") {
          toast.success("Update success");
          navigate("/brandList");
        }
      });
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      SetBtnLoader(false);
    }
  };
  return (
    <div className="container p-5 bg-white">
      <h3>Update Brand status</h3>
      <div className="row">
        <div className="col-md-8">
          <div>
            <label className="pb-2">Brand Name</label>
            <input
              defaultValue={brand?.["brandName"]}
              type="text"
              ref={(input) => (nameRef = input)}
              className=" form-control-sm form-control"
            />
          </div>
          <div>
            <label className="pt-2">Brand Image</label>
            <input
              type="file"
              onChange={previewImage}
              ref={(input) => (imageRef = input)}
              className="form-control-sm  form-control"
            />
          </div>
          <div className="pt-4">
            <SubmitButton
              submit={BtnLoader}
              text="Submit"
              onClick={onSubmit}
              className="btn btn-success"
            />
          </div>
        </div>
        <div className="col-md-4 card d-flex justify-content-center">
          <img
            ref={(input) => (brandImageView = input)}
            className="w-50"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BrandUpdate;
