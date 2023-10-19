const {movieServices} = require('../service')

async function getAllMovie(req, res) {
    const page = req.query.page
    const pageSize =  req.query.page_size
    try{
        const result = await movieServices.getAllMovie(page, pageSize)
        res.status(200).json(result)
    }catch(err){
        console.error(err)
        res.status(err.status).json(err.message)
    }
}

module.exports = {getAllMovie}