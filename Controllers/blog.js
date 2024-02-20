// Display the list of blogs
exports.getBlogList = function(req, res) {
    // Fetch all blogs from the database
    Blog.find({})
        .then(blogs => {
            res.render('blog-list', { blogs: blogs });
        })
        .catch(err => {
            console.error('Error fetching blogs:', err);
            res.status(500).send('Error fetching blogs');
        });
};

// Handle the submission of a new blog
exports.postAddBlog = function(req, res) {
    // Extract blog data from the request body
    const { blogTitle, blogText } = req.body;

    // Create a new Blog instance
    const newBlog = new Blog({
        blogTitle: blogTitle,
        blogText: blogText
    });

    // Save the new blog to the database
    newBlog.save()
        .then(savedBlog => {
            console.log('New blog saved:', savedBlog);
            res.redirect('/blog/list'); // Redirect to the blog list page after saving
        })
        .catch(err => {
            console.error('Error saving blog:', err);
            res.status(500).send('Error saving blog');
        });
};
