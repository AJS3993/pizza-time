const Menu = require("../models/menu");

module.exports = {
index 
}

async function index(req, res) {
	const menu = await Menu.find({});
	res.status(200).json(menu);
  }