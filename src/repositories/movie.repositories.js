const prisma = require('../model')
const getAllMovie = async (page = 1, pageSize = Number.MAX_SAFE_INTEGER) => {
    const halaman = Number(page);
    const perPage = Number(pageSize);
    const skip = (halaman - 1) * perPage;
    
    const result = await prisma.movies.findMany({
        skip,
        take: perPage,
      });
      return result
}
const getMovieById = async (params) => {
    const id = parseInt(params);
    const result = await prisma.movies.findUnique({
      where: {
        id: id,
      },
    });
    return result
  };
  const deleteMovieById = async (params) => {
    const id = parseInt(params);
    const cekId = await prisma.movies.findUnique({
      where: {
        id: id,
      },
    });
    if (!cekId) {
      return false
    }
    const result = await prisma.movies.delete({
      where: {
        id: id,
      },
      select:{
        title: true,
        genres: true,
        year: true,
        photo: true
      }
    });
    return result;
  };

  const createMovie = async (id, title, genres, year, photo) => {
    const result = await prisma.movies.create({
      data: {
        id: id,
        title: title,
        genres: genres,
        year: year,
        photo: photo
      },
      select: {
        title: true,
        genres: true,
        year: true,
        photo: true
      },
    });
    return result;
  };
  const updateMoviesById = async (params, title, genres, year, photo) => {
    const id = parseInt(params);
    const cekId = await prisma.movies.findUnique({
      where: {
        id: id,
      },
    });
    if (!cekId) {
      throw new ResponseError(404, "not found");
    }
    const getOldPhoto = await prisma.movies.findUnique({
        where:{
            id: id
        },
        select:{
            photo: true,
            title: true
        }
    })

    const result = await prisma.movies.update({
      data: {
        title: title,
        genres: genres,
        year: year,
        photo: photo
      },
      where: {
        id: id,
      },
      select: {
        title: true,
        genres: true,
        year: true,
        photo: true
      },
    });
    const oldPhoto = getOldPhoto.photo
    const data = {result, oldPhoto}
    return data;
  };
module.exports = {
    getAllMovie,
    getMovieById,
    deleteMovieById,
    createMovie, 
    updateMoviesById
}