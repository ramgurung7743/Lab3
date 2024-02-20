const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blog');

// Route for displaying the blog list
router.get('/blog-list', blogController.getBlogList);

// Route for displaying the add blog page
router.get('/blog-add', blogController.getAddBlogPage);

// Route for handling the submission of a new blog
router.post('/blog-add', blogController.postAddBlog);

module.exports = router;
