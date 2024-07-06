const { AllCategory } = require("../services/ProductService");
const CategoryModel = require("../models/CategoryModel");
const UpdateService = require("../services/common/UpdateService");
exports.CategoryList = async (req, res) => {
  let result = await AllCategory(req);
  return res.status(200).json(result);
};
exports.CreateCategory = async (req, res) => {
  const { categoryName, categoryImg } = req.body;

  try {
    const category = await CategoryModel.create({
      categoryName,
      categoryImg,
    });

    return res.status(200).json({
      status: true,
      message: "Category create success",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create category" });
  }
};
// Update Category
exports.UpdateCategory = async (req, res) => {
  let result = await UpdateService(req, CategoryModel);
  return res.status(200).json(result);
};
// Delete Category
exports.DeleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const categoryDelete = await CategoryModel.findByIdAndDelete({ _id: id });
    if (categoryDelete) {
      return { status: true, message: "Delete Success" };
    }
  } catch (err) {
    return [];
  }
};

exports.CategoryDetailsById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await CategoryModel.find({ _id: id });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(200).json({ message: "no data found" });
  }
};
