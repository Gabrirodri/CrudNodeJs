const router = require('express-promise-router')();
const productController = require('../controllers/productControllers');

//==> ROTA POST - Criar um novo produto na rota api/products
router.post('/products', productController.createProduct);

//==> ROTA GET - Lista todos os produtos na rota api products
router.get('/products', productController.listAllProducts);

//==> ROTA GET - Lista produtos por id na rota api products:id
router.get('/products/:id', productController.findProductById);

//==> ROTA PUT - Atualiza produtos por id na rota api products:id
router.put('/products/:id', productController.updateProductById);

//==> ROTA DELETE - Deleta produtos por id na rota api products:id
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;
