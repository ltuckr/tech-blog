const { Post } = require('../models');

const postData = [

    {
      "title": "Monkey in the middleware",
      "content": "Lorem ipsum dolor sit amet,",
      "user_id": 0
    },
    {
      "title": "Hold onto your Handlebars!",
      "content": "Lorem ipsum dolor sit amet,",
      "user_id": 1
    },
    {
      "title": "Understanding Sequelize",
      "content": "Lorem ipsum dolor sit amet,",
      "user_id": 2
    }
  ]
 
  const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;