// db.js
const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://blogs:Nepaligirl@localhost:80/blogs_user';

// Connect to MongoDB database
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB database');
}).catch(err => {
    console.error('Error connecting to MongoDB database:', err.message);
});

module.exports = mongoose.connection;
