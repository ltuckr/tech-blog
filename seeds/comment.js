const { Comment } = require('../models');

const commentData =
[
    {
      "title": "a great resource",
      "content": "This is such a useful way to learn about coding!",
      "user_id": 0
    },
    {
      "title": "nice",
      "content": "I hope I can contribute useful info in the future!",
      "user_id": 1
    },
    {
      "title": "Yes!",
      "content": "The people at Stack Overload are so uppity sometimes. This blog is so much more welcoming.",
      "user_id": 2
    }
  ]

  const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
  