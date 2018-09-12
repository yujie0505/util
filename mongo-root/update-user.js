load('./new-data.js')

db.getSiblingDB(new_data.db).updateUser(new_data.user, new_data.update)
