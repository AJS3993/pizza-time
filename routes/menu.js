const express = require("express");
const router = express.Router();
const menuCtrl = require("../../controllers/menu");

/*---------- Public Routes ----------*/
router.get('/index', menuCtrl.index);


/*---------- Protected Routes ----------*/

module.exports = router;