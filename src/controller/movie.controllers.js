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

async function getMovieById(req, res) {
    const {id} = req.params
    try{
        const result = await movieServices.getMovieById(id)
        res.status(200).json(result)
    }catch(err){
        console.error(err)
        res.status(err.status).json(err.message)
    }
}

async function deleteMovieById(req, res) {
    try{
        const {id} = req.params
        const result = await movieServices.deleteMovieById(id)
        res.status(200).json({messege: "delete success ",result})
    }catch(err){
        console.error(err)
        res.status(err.status).json(err.message)
    }
}
async function createMovie(req, res) {
    const {id, title, genres, year} = req.body
    const {filename: photo} = req.file
    try{
        const result = await movieServices.createMovie(id, title, genres, year, photo)
        res.status(200).json({messege: "create new data success ",result})
    }catch(err){
        console.error(err)
        res.status(500).json({message: "internal Server Error"})
    }
}
async function updateMoviesById(req, res) {
    try{
        const {id} = req.params
        const {title, genres, year} = req.body
        const {filename: photo} = req.file
        const result = await movieServices.updateMoviesById(id, title, genres, year, photo)
        res.status(200).json({messege: "update success ",result})
    }catch(err) {
        console.error(err)
        res.status(err.status).json(err.message)
    }
}
module.exports = {getAllMovie, getMovieById, deleteMovieById, createMovie, updateMoviesById}