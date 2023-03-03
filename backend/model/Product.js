const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:String,
    quantity:Number,
    price:Number,
    image:String,
//    foodList:{
//         type:Array,
//         items:{
//             type:String
//         }
//     }

})


module.exports = mongoose.model('Product',ProductSchema)