const express = require("express");
const router = express.Router();
const menuCtrl = require("../../controllers/menu");

/*---------- Public Routes ----------*/
router.get('/index', menuCtrl.index);
router.get('/:id', menuCtrl.show);
router.post('/', menuCtrl.create);
router.delete('/:id', menuCtrl.delete);
router.put('/:id', menuCtrl.update);


/*---------- Protected Routes ----------*/

module.exports = router;