const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

function f() {

db.serialize(() => {
    db.run("CREATE TABLE User("
    + "userId INTEGER NOT NULL PRIMARY KEY"
    + ")");
});

db.close();
}

exports.f = f;