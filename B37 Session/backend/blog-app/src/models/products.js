import mongoose, { Schema, model } from "mongoose";

// Product Schema

const ProductSchema = Schema({
  id: {
    type: Number,
    require: true,
  },
  title: String,
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  rating: {
    rate: {
      type: Number,
      require: true,
    },
    count: {
      type: Number,
      require: true,
    },
  },
});

// Model/Collection - Products
const Products = mongoose.model("products", ProductSchema);

export default Products;
