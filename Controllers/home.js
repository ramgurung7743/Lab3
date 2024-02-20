// In a file like homeRouter.js
const express = require('express');
const homeRouter = express.Router();

exports.getHomePage = (req, res) => {
    res.render('home', {
      title: 'Your Name Blog Site',
      pageTitle: 'Your Name Blog Site',
      message: 'Welcome to my blog!'
    });
  };
  