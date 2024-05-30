const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? req.file.filename : null;
  try {
    const post = new Post({ title, content, image, author: req.user._id });
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username');
    if (!post) return res.status(404).send({ message: 'Post not found' });
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send({ message: 'Post not found' });

    post.title = title;
    post.content = content;
    if (req.file) {
      post.image = req.file.filename;
    }

    await post.save();
    res.send(post);
  } catch (error) {
    res.status (500).send(error);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }

    await Post.deleteOne({ _id: req.params.id });
    res.send({ message: 'Post removed' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send({ message: 'Post not found' });

    if (post.likes.includes(req.user._id)) {
      post.likes.pull(req.user._id);
    } else {
      post.likes.push(req.user._id);
    }

    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

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
