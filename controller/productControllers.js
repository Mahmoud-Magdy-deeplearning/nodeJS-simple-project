const Product = require("../models/ProductModel");

//getting products
// @GET

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    const msg = (products==null)? "No Items exist yet" : products;
    res.json(msg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "could not get all products" });
  }
};


const getProductById  = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const msg = (product==null)? "there is no item with that ID" : product;
    res.json(msg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "could not get one product" });
  }
};

// deleting products
// @DELETE

const deleteProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json("all products are deleted");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "removing all failed" });
  }
};


const deleteProductById = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json("product with id "+ req.params.id + " had been deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "deleting item failed" });
  }
};

// updating products
// @PUT
const updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id,  {
      $set:req.body
    });
    res.json("product with id "+ req.params.id + " had been updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "updating item failed" });
  }
};

// creating products
// @POST
const createProduct = async (req, res) => {
  try {
    const prodcut = new Product({
      name : req.body.name,
      description : req.body.description,
      price : req.body.price,
      countInStock : req.body.countInStock
    });
    await prodcut.save();
    res.json("product had been created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "creating item failed" });
  }
};

module.exports = {
  getProducts,
  getProductById,
  deleteProducts,
  deleteProductById,
  updateProductById,
  createProduct
};
