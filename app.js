const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes/blogRoutes');
//express app
const app = express();

const dbURI = 'mongodb+srv://sahilromit:Sahil1234@node-blogs.12qpzdl.mongodb.net/sahil-blogs?retryWrites=true&w=majority';

mongoose.connect(dbURI).then((result) => {
    //listen to 3000
    console.log('connected')
    app.listen(3000);
}).catch((err) => {
    console.error(err);
})

app.set('view engine','ejs');


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) => {
    res.redirect('/allBlogs')
})

app.get('/about',(req,res) => {
    res.render('about',{
        title : 'About'
    });
})


////blod CURD

app.use(router);

app.use((req,res) => {
    res.status(404).render('404',{
        title : '404'
    })
})