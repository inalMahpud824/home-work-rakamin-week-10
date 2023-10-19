const express = require('express')
const router = require('./route/index.js')
const app = express()

const port = 8000

app.use(router)
app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})
