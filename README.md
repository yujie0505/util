# util
==============

## mongo-root

> scripts for managing mongoDB

### [create new users](https://docs.mongodb.com/manual/reference/method/db.createUser/)

```bash

$ cd mongo-root/

# set information for new users
# -----------------------------
#   name       : (string) User name
#   db         : (string) Database that each user belonged to
#   customData : (object) User information
#   roles      : (array)  User roles

$ cp ./ref/users.js users.js
$ vi users.js

# execute mongoDB shell script

$ mongo admin create-user.js

```

### [update user information](https://docs.mongodb.com/manual/reference/method/db.updateUser/)

```bash

$ cd mongo-root/

# set new information for existing user
# -------------------------------------
#   user   : (string) User name
#   db     : (string) Database that user belonged to
#   update : (object) New information

$ cp ./ref/new-data.js new-data.js
$ vi new-data.js

# execute mongoDB shell script

$ mongo admin update-user.js

```
