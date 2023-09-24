const { Comment } = require('../models');

const commentData = [
  {
    "user_id": 1,
    "post_id": 1, // Provide a valid post ID
    "comment_text": "This is such a useful way to learn about coding!"
  },
  {
    "user_id": 2,
    "post_id": 2, // Provide a valid post ID
    "comment_text": "I hope I can contribute useful info in the future!"
  },
  {
    "user_id": 3,
    "post_id": 3, // Provide a valid post ID
    "comment_text": "The people at that other blog are so uppity sometimes. This blog is so much more welcoming."
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
  