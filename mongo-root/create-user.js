load('./new-users.js')

const generatePassword = length => Math.floor(Math.random() * Math.pow(36, length)).toString(36)

const password_length = 8

for (let user of new_users) {
  const password = generatePassword(password_length)

  db.getSiblingDB(user.db).createUser({
    user: user.user,
    pwd: password,
    customData: user.customData,
    roles: [
      'readWrite',
      { role: 'changeOwnPasswordCustomDataRole', db: 'admin' }
    ].concat(user.roles)
  })

  print(`${user.user}: ${password}`)
}
