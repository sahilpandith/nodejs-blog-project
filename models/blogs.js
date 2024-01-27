const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title : {
        require : true,
        type : String
    },
    body : {
        require : true,
        type : String
    }
},{
    timestamps :true
});


const Blog = mongoose.model('Blog',BlogSchema);
module.exports= Blog;