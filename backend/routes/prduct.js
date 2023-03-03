const express = require('express');
const { AddProduct, GetProducts, deleteProduct, UpdateArticle, GetById } = require('../controllers/Controllers');

const ProductRouter = express.Router();

ProductRouter.post('/add',AddProduct);
ProductRouter.get('/list',GetProducts);
ProductRouter.delete('/remove/:id',deleteProduct)
ProductRouter.put('/update/:id', UpdateArticle);
ProductRouter.get('/article/:id',GetById)


module.exports = ProductRouter;