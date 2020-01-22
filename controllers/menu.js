const Menu = require("../models/menu");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const menu = await Menu.find({});
  res.status(200).json(menu);
}

async function show(req, res) {
  const menu = await Menu.findById(req.params.id);
  res.status(200).json(menu);
}

async function create(req, res) {
  try{
    const menu = await Menu.create(req.body);
    res.status(201).json(menu);
  } catch (err){
    res.status(400).json(err);
  }
}

async function deleteOne(req, res) {
  const deletedItem = await Menu.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedItem);
}

async function update(req, res) {
  const updatedItem = await Menu.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedItem);
}
