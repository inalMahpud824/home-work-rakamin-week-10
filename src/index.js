const express = require('express')
const router = require('./route/index.js')
const app = express()
const path = require('path')

const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, '../uploads')));
app.use(router)
app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})
