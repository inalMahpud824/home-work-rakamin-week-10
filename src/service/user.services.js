const { userRepositories } = require("../repositories");
const ResponseError = require("../util/response-error.js");

const getAllUsers = async (page, pageSize) => {
  const result = await userRepositories.getAllUsers(page, pageSize);
  if (!result) {
    throw err = new ResponseError(500, "Server Error");
  }
  return result;
};
const getUserById = async (id) => {
    const result = await userRepositories.getUserById(id)
    if (!result) {
      throw err =  new ResponseError(404, "not found");
    }
    return result;
  };

  const deleteUserById = async (id) => {
    const result = await userRepositories.deleteUserById(id)
    if(!result){
        throw err =  new ResponseError(404, "not found");
    }
    return result;
  };

  const createUser = async (id, email, gender, password, role) => {
    const uid = parseInt(id)
    const result = await userRepositories.createUser(uid, email, gender, password, role)
    return result;
  };

  const updateUserById = async (params, email, gender, password, role) => {
    const result = await userRepositories.updateUserById(params, email, gender, password, role)
    return result
  }
module.exports ={getAllUsers, getUserById, deleteUserById, createUser, updateUserById}


