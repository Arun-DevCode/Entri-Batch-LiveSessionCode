import express from "express";

const router = express.Router();

//imports
import Order from "../models/order.js";

router.get("/summary", async (req, res) => {
  try {
    const result = await Order.aggregate([
      // 1️. Filter completed orders
      {
        $match: { status: "completed" },
      },

      // 2. Group by userId
      {
        $group: {
          _id: "$userId",
          totalOrders: { $sum: 1 },
          totalAmount: {
            $sum: { $multiply: ["$price", "$quantity"] },
          },
        },
      },

      // 3️. Format output
      {
        $project: {
          _id: 0,
          userId: "$_id",
          totalOrders: 1,
          totalAmount: 1,
        },
      },

      // 4️. Sort by amount
      {
        $sort: { totalAmount: -1 },
      },
    ]);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
