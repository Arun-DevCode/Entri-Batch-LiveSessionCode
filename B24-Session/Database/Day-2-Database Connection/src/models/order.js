import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: String,
  product: String,
  category: String,
  price: Number,
  quantity: Number,
  status: String,
  createdAt: Date,
});

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel;
