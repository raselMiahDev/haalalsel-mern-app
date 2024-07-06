import React, { useRef, useState, useEffect } from "react";
import { CategoryUpdateRequiest } from "../../API/AdminApiRequiest";
import { CategoryDetailsByIdRequest } from "../../API/apiRequiest";
import toast, { Toaster } from "react-hot-toast";
import { getBase64 } from "../../helper/FormHelper";
import SubmitButton from "../common/SubmitButton";
import { useNavigate, useParams } from "react-router-dom";

const CategoryUpdate = () => {
  const [category, setCategory] = useState();
  let nameRef,
    imageRef,
    ImageViewRef = useRef();
  const [BtnLoader, SetBtnLoader] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const result = await CategoryDetailsByIdRequest(id);
      setCategory(result?.[0]);
    })();
  }, []);

  const previewImage = () => {
    let imageFile = imageRef.files[0];
    getBase64(imageFile).then((res) => {
        ImageViewRef.src = res;
    });
  };

  const onSubmit = async () => {
    let name = nameRef.value;
    let imageFile = imageRef.files[0];
    try {
      SetBtnLoader(true);
      const base64Image = await getBase64(imageFile);
      await CategoryUpdateRequiest(id, name, base64Image).then((res) => {
        if (res && res.status === "success") {
          toast.success("Update success");
          navigate("/CategoryList");
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
      <h3>Update Category status</h3>
      <div className="row">
        <div className="col-md-8">
          <div>
            <label className="pb-2">Category Name</label>
            <input
              defaultValue={category?.["categoryName"]}
              type="text"
              ref={(input) => (nameRef = input)}
              className=" form-control-sm form-control"
            />
          </div>
          <div>
            <label className="pt-2">Category Image</label>
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
              text="Update"
              onClick={onSubmit}
              className="btn btn-success px-3"
            />
          </div>
        </div>
        <div className="col-md-4 card d-flex justify-content-center">
          <img
            ref={(input) => (ImageViewRef = input)}
            className="w-50"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;
