const { AllBrands } = require("../services/ProductService");
const BrandModel = require("../models/BrandModel");
const UpdateService = require("../services/common/UpdateService");
exports.BrandList = async (req, res) => {
  let result = await AllBrands(req);
  return res.status(200).json(result);
};
exports.CreateBrand = async (req, res) => {
  const { brandName, brandImg } = req.body;

  try {
    const brand = await BrandModel.create({
      brandName,
      brandImg,
    });

    return res.status(200).json({
      status: true,
      message: "Brand create success",
      data: brand,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create brand" });
  }
};

// Update Category
exports.UpdateBrand = async (req, res) => {
  let result = await UpdateService(req, BrandModel);
  return res.status(200).json(result);
};
// Delete Category
exports.DeleteBrand = async (req, res) => {
  try {
    const id = req.params.id;
    const brandDelete = await BrandModel.findByIdAndDelete({ _id: id });
    if (brandDelete) {
      return { status: true, message: "Delete Success" };
    }
  } catch (err) {
    return [];
  }
};
exports.BrandDetailsById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await BrandModel.find({ _id: id });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(200).json({ message: "no data found" });
  }
};
