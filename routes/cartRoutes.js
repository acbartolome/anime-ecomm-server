const express = require("express");
const router = express.Router();
const {
  viewCartItem,
  addToCart,
  removeItem,
  updateCartItem,
  mergeCart,
} = require("../controllers/cartController");

//Merge cart after login
router.post("/merge", mergeCart);

// View cart based on ID
router.get("/:userId", viewCartItem); // Now includes userId in the route

// Add to cart
router.post("/", addToCart);

// Edit the items in your cart using Patch
router.patch("/:id", updateCartItem); // Add updateCartItem controller to handle patch requests

// Remove an item from your cart using DELETE
router.delete("/:userId/:productId", removeItem); // Now includes userId and productId for specific removal

module.exports = router;
