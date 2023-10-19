const prisma = require('../model')
const getAllUsers = async (page = 1, pageSize = Number.MAX_SAFE_INTEGER) => {
    const halaman = Number(page);
    const perPage = Number(pageSize);
    const skip = (halaman - 1) * perPage;
    
    const result = await prisma.users.findMany({
        skip,
        take: perPage,
      });
      return result
}
const getUserById = async (params) => {
    const id = parseInt(params);
    const result = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    return result
  };
  const deleteUserById = async (params) => {
    const id = parseInt(params);
    const cekId = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    if (!cekId) {
      return false
    }
    const result = await prisma.users.delete({
      where: {
        id: id,
      },
      select:{
        email: true,
        gender: true,
        password: true,
        role: true
      }
    });
    return result;
  };

  const createUser = async (id, email, gender, password, role) => {
    const result = await prisma.users.create({
      data: {
        id: id,
        email:email,
        gender: gender,
        password: password,
        role: role
      },
      select: {
        email: true,
        gender: true,
        password: true,
        role: true
      },
    });
    return result;
  };
  const updateUserById = async (params, email, gender, password, role) => {
    const id = parseInt(params);
    const cekId = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    if (!cekId) {
      throw new ResponseError(404, "not found");
    }
    const result = await prisma.users.update({
      data: {
        email:email,
        gender: gender,
        password: password,
        role: role
      },
      where: {
        id: id,
      },
      select: {
        email: true,
        gender: true,
        password: true,
        role: true
      },
    });
    return result
  };
module.exports = {
    getAllUsers,
    getUserById,
    deleteUserById,
    createUser,
    updateUserById
}