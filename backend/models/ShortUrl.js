const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewSchema = new Schema({
shortUrl:{
    type:String,
    required:true,
},
originalUrl:{
    type:String,
    required:true,
}
});

const ShortUrl = mongoose.model('ShortUrl', NewSchema);
module.exports = ShortUrl; 