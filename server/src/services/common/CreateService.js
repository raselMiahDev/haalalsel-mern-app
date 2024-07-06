const CreateService = async (req, dataModel) => {
  try {
    let postBody = req.body;
    postBody.userEmail = req.headers["email"];
    let data = await dataModel.create(postBody);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};
module.exports = CreateService;
