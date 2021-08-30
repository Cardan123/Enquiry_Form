const { Router }= require('express');
const { postMensajes } = require('../controllers/mensajes');

const router = Router();

router.post('/',postMensajes);

module.exports = router;