import React, { useRef, useState } from "react";
import { CreateBrandRequiest } from "../../API/AdminApiRequiest";
import toast, { Toaster } from "react-hot-toast";
import { getBase64 } from "../../helper/FormHelper";
import SubmitButton from "../common/SubmitButton";
const AddBrand = () => {
  let nameRef,
    imageRef,
    brandImageView = useRef();
  const [BtnLoader, SetBtnLoader] = useState(false);

  const previewImage = () => {
    let imageFile = imageRef.files[0];
    getBase64(imageFile).then((res) => {
        brandImageView.src = res;
    });
  };

  const onSubmit = async () => {
    let name = nameRef.value;
    let imageFile = imageRef.files[0];
    
    if (name.length === 0) {
      toast.error("Name is required");
    } else if (!imageFile) {
      toast.error("Please select an image");
    } else {
      SetBtnLoader(true);
      
      // Convert image file to base64
      const base64Image = await getBase64(imageFile);
      
      await CreateBrandRequiest(name, base64Image).then((res) => {
        if (res && res.status === true) { // Check if response exists and status is true
          toast.success(res.message);
        }
      }).catch(error => {
        toast.error("An error occurred while creating the category");
        console.error("Error creating category:", error);
      });
      
      SetBtnLoader(false);
    }
  };
  

  return (
    <div className="container p-5 bg-white">
      <div className="row">
        <div className="col-md-8">
          <div>
            <label className="pb-2">Brand Name</label>
            <input
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

export default AddBrand;
