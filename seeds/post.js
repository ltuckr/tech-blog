const { Post } = require('../models');

const postData = [

    {
      "title": "Monkey in the middleware",
      "content": "Lorem ipsum dolor sit amet,",
      "user_id": 1
    },
    {
      "title": "Hold onto your Handlebars!",
      "content": "Lorem ipsum dolor sit amet,",
      "user_id": 2
    },
    {
      "title": "Understanding Sequelize",
      "content": "Lorem ipsum dolor sit amet,",
      "user_id": 3
    }
  ]
 
  const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;