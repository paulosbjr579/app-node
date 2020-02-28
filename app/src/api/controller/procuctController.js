const serviceProduct = require('../service/procuctService')

exports.findAll = async(req, res, next) => {
    let productResult = null;
    try {
      productResult = await serviceProduct.findAll();
      res.send(productResult.data);
    } catch (error) {
      res.status(404).send(error);
    } 
}

exports.createProduct = async(req, res, next) => {
    let productResult = null;
    const data = req.body;
    try {
      productResult = await serviceProduct.createProduct(data);
      res.send(productResult.data);
    } catch (error) {
      res.status(404).send({message:"erro ao criar o produto!!!"});
    } 
}

exports.findbyid = async(req, res, next) => {
    let productResult = null;
    try {
      productResult = await serviceProduct.findById(req.params.id);
      res.send(productResult.data);
    } catch (error) {
      res.status(404).send({message:"erro ao buscar por id o produto!!!"});
    } 
}

exports.updata = async(req, res, next) => {
    let productResult = null;
    const data = req.body;
    try {
      productResult = await serviceProduct.updata(req.params.id,data);
      res.send(productResult.data);
    } catch (error) {
      res.status(404).send({message:"erro ao alterar o produto!!!"});
    }     
}

exports.delete = async(req, res, next) => { 
    let productResult = null;
    try {
      productResult = await serviceProduct.delete(req.params.id)
      res.send(productResult.data);
    } catch (error) {
      res.status(404).send({message:"erro ao deletar o produto!!!"});
    } 
}

exports.findbyName = async(req, res, next) => {
  let productResult = null;
  try {
    productResult = await serviceProduct.findByName(req.params.name);
    res.send(productResult.data);
  } catch (error) {
    res.status(404).send({message:"erro ao buscar por name o produto!!!"});
  } 
}

exports.deleteAll = async(req, res, next) => { 
  let productResult = null;
  try {
    productResult = await serviceProduct.deleteAll()
    console.log(productResult)
    res.send(productResult.data);
  } catch (error) {
    console.log(error)
    res.status(error).send({message:"erro ao deletar todos os produtos!!!"});
  } 
}