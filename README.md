## mongo-root

> scripts for managing mongoDB

### [create new users](https://docs.mongodb.com/manual/reference/method/db.createUser/)

```bash

$ cd mongo-root/

# set information for new users
# -----------------------------
#   user       : (string) User name
#   db         : (string) Database that each user belonged to
#   customData : (object) User information
#   roles      : (array)  User roles

$ cp ./ref/new-users.js new-users.js
$ vi new-users.js

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

## vue-express

> start-up package for building Vue project on an Express server

1. Install corresponding packages

```bash
$ npm i

# or

$ yarn
```

2. Create configuration file, **_option.json_** (not tracking this file on Git is recommended), and add fields like below:

```json
{
  "paths": {
    "dist": "dist",
    "src": "app"
  },
  "server": {
    "host": "0.0.0.0",
    "port": 3000
  }
}
```

3. Start server

```bash
$ npm run watch

# or

$ yarn run watch
```
