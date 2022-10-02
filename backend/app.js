const { response } = require('express')
const express = require('express')
const database = require('./database')
const app = express()
const port = 3000

database.createUserTable()

app.use(express.static("frontend/html"))
app.use(express.urlencoded({ extended: false}))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render("index", {})
})

app.get('/login', (req, res) => {
  res.render("login.ejs", {})
})

app.post('/login', (req, res, next) => {
  var db = database.openDatabase()
  let sql = `SELECT * FROM user WHERE userName = "${req.body.userName}" AND passwordHash = "${req.body.password}"`;
  var x = 0;

  db.all(sql, (err, rows) => {
   rows.forEach((row) => {
     if (row.userName === req.body.userName || row.passwordHash === req.body.password) {
         x = 1;
         database.closeDatabase();
     }
     else{
         x = 2;
     }
   })
   if (x === 1) {
    res.redirect('/');
   }
   else{ 
    res.send('Invalid username or password'); 
  }
  })
}) 

app.get('/register', (req, res) => {
  res.render("register.ejs")
})

app.post("/register", (req, res) => {
  database.createNewUser(req.body.userName, req.body.password)
  console.log(database.getUserTable())
  res.redirect("/login")
})

app.listen(port, () => {
  console.log("Example app listening on port ${port}")
})