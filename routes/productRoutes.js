const express = require("express");
const router = express.Router();
const {
  getProducts, 
  getProductById, 
  deleteProductById,
  deleteProducts,
  updateProductById,
  createProduct  
} = require("../controller/productControllers");

router.
  route('/')
    .get(getProducts)
    .post(createProduct)
    .delete(deleteProducts)

router.
  route('/:id')
    .get(getProductById)
    .delete(deleteProductById)
    .put(updateProductById);

module.exports = router;
