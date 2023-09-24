const { User } = require('../models');

const userData =
[
    {
      "username": "Leah",
      "email": "leah@example.com",
      "password": "pw1234"
    },
    {
      "username": "Johntech",
      "email": "johntech@example.com",
      "password": "pw1234"
    },
    {
      "username": "Aaron",
      "email": "aaron@example.com",
      "password": "pw1234"
    }
  ]
  
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
  