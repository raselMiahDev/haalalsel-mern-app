const ProductModel = require("../../models/ProductsModel");

const ProductCreateService = async (req) => {
  const {
    title,
    shortDes,
    price,
    discount,
    discountPrice,
    image,
    stock,
    star,
    remark,
    categoryID,
    brandID,
  } = req.body;
  try {
    const product = await new ProductModel({
      title,
      shortDes,
      price,
      discount,
      discountPrice,
      image,
      stock,
      star,
      remark,
      categoryID,
      brandID,
    });
    await product.save();
    return {
      status: true,
      message: "Product create success",
      product: product,
    };
  } catch (error) {
    return {
      error,
      status: false,
      message: "Something is wrong",
    };
  }
};

const ProductDeleteService = async (req) => {
  try {
    const id = req.params.id;
    const productDelete = await ProductModel.findByIdAndDelete({ _id: id });
    if (productDelete) {
      return { status: true, message: "Product Delete" };
    }
  } catch (err) {
    return [];
  }
};

module.exports = { ProductCreateService, ProductDeleteService };
