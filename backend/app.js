const { response } = require('express')
const express = require('express')
const database = require('./database')
const bcrypt = require ('bcrypt');
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

async function hashPassword(password){
    const originalpassword = password;
    const saltRounds = 10;
    passwordHash = "";
    await bcrypt.hash(originalpassword, saltRounds).then(value => {
    passwordHash = value;
    });
    return passwordHash;
}

app.post('/login', (req, res, next) => {
  var db = database.openDatabase()
  const pw = hashPassword(req.body.password);
  let sql = `SELECT * FROM user WHERE userName = "${req.body.userName}" AND passwordHash = "${pw}"`;
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