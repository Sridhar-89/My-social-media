const express = require('express');
const router = express.Router();
const { addComment, getComments } = require('../controllers/commentController');
const auth = require('../middlewares/auth');

router.post('/:postId/comments', auth, addComment);
router.get('/:postId/comments', getComments);

module.exports = router;
