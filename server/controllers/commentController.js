// const Post = require('../models/Post');

// exports.addComment = async (req, res) => {
//   const { content } = req.body;
//   try {
//     const post = await Post.findById(req.params.postId);
//     if (!post) {
//       return res.status(404).send({ message: 'Post not found' });
//     }
//     const comment = {
//       content,
//       author: req.user._id,
//       timestamp: new Date(),
//     };
//     post.comments.push(comment);
//     await post.save();
//     res.status(201).send(comment);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// exports.getComments = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.postId).populate('comments.author', 'username');
//     if (!post) {
//       return res.status(404).send({ message: 'Post not found' });
//     }
//     res.send(post.comments);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

exports.addComment = async (req, res) => {
  const { content } = req.body;
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }
    const comment = {
      content,
      author: req.user._id,
      timestamp: new Date(),
    };
    post.comments.push(comment);
    await post.save();
    res.status(201).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getComments = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate('comments.author', 'username');
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }
    res.send(post.comments);
  } catch (error) {
    res.status(500).send(error);
  }
};