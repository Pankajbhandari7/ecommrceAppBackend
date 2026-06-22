const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// GET cart for a user
router.get('/:userId', cartController.getCart);

// POST add item to cart
router.post('/:userId', cartController.addToCart);

// PUT update quantity
router.put('/:userId/:productId', cartController.updateQuantity);

// DELETE remove item from cart
router.delete('/:userId/:productId', cartController.removeFromCart);

// DELETE clear cart
router.delete('/:userId', cartController.clearCart);

module.exports = router;
