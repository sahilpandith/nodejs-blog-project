const express = require('express');
const Blog = require('../models/blogs');

const router = express.Router();


router.get('/blog/create',(req,res) => {
    res.render('createBlog',{
        title : 'Blog'
    });
})

router.get('/allBlogs', (req,res) => {
    Blog.find().sort({'updatedAt': -1}).then(blogs => {
        res.render('allBlogs',{
            title : 'Blog',
            blogs
        });
    })
})

router.post('/blogs',(req,res) => {
    const blog = new Blog(req.body);
    blog.save().then((result) => {
        res.redirect('/allBlogs');
    })
})

router.get('/blogs/:id',(req,res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findById(id).then(result => {
        res.render('blogDetails' ,{
            title : ' Blog Details',
            blog : result
        })
    })
})

router.delete('/blog/:id',(req,res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findByIdAndDelete(id).then((result) => {
        return res.json({redirect : '/allBlogs'});
    }).catch(err => {
        console.error(err);
    }) 
})

module.exports = router;