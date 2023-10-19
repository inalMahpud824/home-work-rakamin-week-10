const { movieRepositories } = require("../repositories");
const ResponseError = require("../util/response-error.js");


const getAllMovie = async (page, pageSize) => {
  const result = await movieRepositories.getAllMovie(page, pageSize);
  if (!result) {
    throw err = new ResponseError(500, "Server Error");
  }
  return result;
};
const getMovieById = async (id) => {
    const result = await movieRepositories.getMovieById(id)
    if (!result) {
      throw err =  new ResponseError(404, "not found");
    }
    return result;
  };

  const deleteMovieById = async (id) => {
    const result = await movieRepositories.deleteMovieById(id)
    if(!result){
        throw err =  new ResponseError(404, "not found");
    }
    return result;
  };

module.exports ={getAllMovie, getMovieById, deleteMovieById}


