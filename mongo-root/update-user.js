// object for new data to user 
load('new-data.js');

// update data to mongoDB

// switch database
var db = db.getSiblingDB(data.db);
// mongo shell command
db.updateUser(data.user, data.update);

// vi:et:nowrap:sw=2:ts=2
