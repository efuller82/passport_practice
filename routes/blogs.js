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
                content,
        });
        Blog.create({ title, category, content }).then(() => {
                res.send(newBlog);
        });
});
// !end of attempt to make post route
//! beginning of trying to get blogs from db onto page
//! This is all fucked up
router.get('allBlogs', (req, res) => {
        Blog.find({}, (err, blogs) => {
                res.json(blogs);
        });
});

//! ending of trying to get blogs from db onto page

module.exports = router;
