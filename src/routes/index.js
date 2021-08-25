const express = require('express');
const router = express.Router();

router.get('/teste', ()=>{console.log('rota de teste')});
router.get('/api', (req, res)=>{
  res.status(200).send({
    success: 'true',
    message: 'Aplicação com NodeJs + Postgres',
    version: '1.0.0',
  });
});

module.exports = router;