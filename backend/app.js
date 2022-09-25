const express = require('express')
const database = require('./database')
const app = express()
const port = 3000

database.f();

app.use(express.static("frontend/html"))

app.get('/', (req, res) => {
  res.render("index", {})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})