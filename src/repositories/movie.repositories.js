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
      },
    });
    return result;
  };
module.exports = {
    getAllMovie,
    getMovieById,
    deleteMovieById,
    createMovie
}