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

module.exports = {
    getAllMovie
}