// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const path = require('path');
// const { createPost, getPosts, getPost, updatePost, deletePost, likePost} = require('../controllers/postController');
// const auth = require('../middlewares/auth');

// // Configure multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Save files in 'uploads' directory
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Save file with a unique name
//   }
// });

// const upload = multer({ storage: storage });

// router.post('/', auth, upload.single('image'), createPost);
// router.get('/', getPosts);
// router.get('/:id', getPost);
// router.put('/:id', auth, upload.single('image'), updatePost);
// router.delete('/:id', auth, deletePost);
// router.post('/:id/like', auth, likePost);
// // router.post('/:postId/comments', auth, addComment);
// // router.get('/:postId/comments', getComments);

// module.exports = router;


const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { createPost, getPosts, getPost, updatePost, deletePost, likePost } = require('../controllers/postController');
const auth = require('../middlewares/auth');

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save files in 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with a unique name
  }
});

const upload = multer({ storage: storage });

router.post('/', auth, upload.single('image'), createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.put('/:id', auth, upload.single('image'), updatePost);
router.delete('/:id', auth, deletePost);
router.post('/:id/like', auth, likePost);

module.exports = router;
