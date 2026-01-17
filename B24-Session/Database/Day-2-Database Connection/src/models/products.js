import mongoose from "mongoose";

// Product Schema
const ProductSchema = mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
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

// Collection
const ProductModel = mongoose.model("products", ProductSchema);

export default ProductModel;