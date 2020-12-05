const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');
const { body } = require('express-validator/check');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  '/add-product',
  [
    body('title').isString().isLength({ min: 3, max: 70 }).trim(),
    body('imageUrl').isURL(),
    body('price').isFloat(),
    body('description').isLength({ min: 3, max: 255 }).trim(),
  ],
  isAuth,
  adminController.postAddProduct
);

// /admin/edit-product => GET
router.get(
  '/edit-product/:productId',
  [
    body('title').isString().isLength({ min: 3, max: 70 }).trim(),
    body('imageUrl').isURL(),
    body('price').isFloat(),
    body('description').isLength({ min: 3, max: 255 }).trim(),
  ],
  isAuth,
  adminController.getEditProduct
);

// /admin/edit-product => POST
router.post('/edit-product', isAuth, adminController.postEditProduct);

// /admin/delete-product => POST
router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
