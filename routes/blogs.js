const express = require('express');
const router = express.Router();

// ! don't know if i need this
// const { forwardAuthenticated } = require('../config/auth');

// Load Blog model
const Blog = require('../models/Blog');

// ! attempt to make post route 
// Dashboard Page

router.post('/dashboard', (req, res) => {
    const { title, category, content } = req.body;
    console.log(req.body);
    const newBlog = new Blog({
        title,
        category,
        content
    })
    Blog.create({ title: title, category: category, content: content }).then(() => {
        res.send(newBlog);
    })

})
// !end of attempt to make post route

module.exports = router;