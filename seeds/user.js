const { User } = require('../models');

const userData =
[
    {
      "name": "Leah",
      "email": "leah@example.com",
      "password": "pw1234"
    },
    {
      "name": "Johntech",
      "email": "johntech@example.com",
      "password": "pw1234"
    },
    {
      "name": "Aaron",
      "email": "aaron@example.com",
      "password": "pw1234"
    }
  ]
  
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
  