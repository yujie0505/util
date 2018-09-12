// array for new users
load('users.js');

// add users to mongoDB
for(var i = 0; i < users.length; i++){
  // switch database
  db = db.getSiblingDB(users[i].db);
  // user document
  user = {
    user: users[i].name,
    // generate random password (default: 1~8 chars)
    pwd: generatePassword(),
    customData: users[i].customData,
    roles: ['readWrite', {role: 'changeOwnPasswordCustomDataRole', db: 'admin'}]
  };
  if(users[i].roles){
    user.roles = user.roles.concat(users[i].roles);
  }
  // mongo shell command
  db.createUser(user);
  // show username and password
  print(users[i].name + ': ' + user.pwd);
}

function generatePassword(length){
  var base = 36;
  length == null && (length = 8);
  return Math.floor(Math.random() * Math.pow(base, length)).toString(base);
}

// vi:et:nowrap:sw=2:ts=2
