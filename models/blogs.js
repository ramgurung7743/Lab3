// Import Mongoose
const mongoose = require('mongoose');

// Define the blogSchema schema
const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true
    },
    blogText: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

// Create and export the Blog model using the blogSchema schema
module.exports = mongoose.model('Blog', blogSchema);
