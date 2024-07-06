const UpdateService = async (req, dataModel) => {
  try {
    let id = req.params.id;
    let postBody = req.body;

    let data = await dataModel.findByIdAndUpdate({ _id: id }, postBody, {
      new: true,
    });
    await data.save();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};
module.exports = UpdateService;
