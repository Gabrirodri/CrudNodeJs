const router = require('express-promise-router')();
const productController = require('../controllers/productControllers');

//==> ROTA POST - Criar um novo produto na rota api/products
router.post('/products', productController.createProduct);

//==> ROTA GET - Lista todos os produtos na rota api products
router.get('/products', productController.listAllProducts);

module.exports = router;