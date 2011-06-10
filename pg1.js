var pg = require('pg'); 
//or native libpq bindings
//var pg = require('pg').native

var conString = process.env.DATABASE_URL || "tcp://postgres:1234@localhost/postgres";

//error handling omitted
pg.connect(conString, function(err, client) {
  client.query("SELECT NOW() as when", function(err, result) {
    console.log("Row count: %d",result.rows.length);  // 1
    console.log("Current year: %d", result.rows[0].when.getYear());
  });
});