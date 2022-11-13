const sqlite3 = require('sqlite3').verbose();
const bcrypt = require ('bcrypt');

function openDatabase() {
    return new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, (err) => {
        if (err) return console.error(err.message);

        console.log("connection succesfull");
    });
}

function closeDatabase() {//Call it if we dont want to do anything anymore in the database
    db.close((err) => {
        if (err) return console.error(err.message);
    })
}


function createUserTable() {//Only creates table if it not exists
    db = openDatabase();
    db.run("CREATE TABLE IF NOT EXISTS user(userId INTEGER NOT NULL PRIMARY KEY, userName TEXT, passwordHash TEXT)");
    closeDatabase(db);
}

async function createNewUser(userName, password) {
    db = openDatabase();
    console.log(password);
    const passwordHash = await bcrypt.hash(password, 12);
    console.log(passwordHash);
    await db.run("INSERT INTO user(userId, userName, passwordHash) VALUES(NULL,?,?)", [userName, passwordHash], (err) => {
        if(err) {
            return console.log(err.message);
        }
        console.log("Row was added to the table");
    })
    
    closeDatabase(db);
}

function getUserTable() {
    db = openDatabase();
    let sql = "SELECT * FROM user"
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          console.log(row.userId, row.userName, row.passwordHash);
        });
      });
    closeDatabase(db);
}



exports.createUserTable = createUserTable;
exports.createNewUser = createNewUser;
exports.getUserTable = getUserTable;
exports.closeDatabase = closeDatabase;
exports.openDatabase = openDatabase;