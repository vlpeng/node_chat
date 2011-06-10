var pg = require('pg').native; //native libpq bindings = `var pg = require('pg').native`
var conString = process.env.DATABASE_URL || "tcp://postgres:1234@localhost/postgres";

var client = new pg.Client(conString);
client.connect();

client.query("DROP TABLE chat_messages", function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Dropped table");
    }
    client.end();
});
