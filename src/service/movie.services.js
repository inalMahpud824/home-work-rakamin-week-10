const { movieRepositories } = require("../repositories");
const { ResponseError } = require("../util/response-error.js");

const getAllMovie = async (page, pageSize) => {
  const result = await movieRepositories.getAllMovie(page, pageSize);
  if (!result) {
    throw new ResponseError(500, "Server Error");
  }
  return result;
};
module.exports ={getAllMovie}
