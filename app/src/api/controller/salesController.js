const serviceSales = require('../service/salesService')
const serviceClient = require('../service/clientService')

exports.findAll = async(req, res, next) => {
  try{
    const result = await serviceSales.findAll()
    res.send(result);
  }catch(error){
    res.status(error).send({message: error});
  }    
}

exports.createSales = async(req, res, next) => {
      const data = req.body;
      try{
        const result = await serviceSales.createSales(data)
        res.send(result);
      }catch(error){
        res.status(error).send({message: error});
      }  
}

exports.findbyid = async(req, res, next) => {  
  try{
    const result = await serviceSales.findById(req.params.id)
    res.send(result);
  }catch(error){
    res.send(error);
  } 
}

exports.updata = async(req, res, next) => {
  const data = req.body;
  try{
    const result = await serviceSales.updata(req.params.id,data);
    res.send(result);
  }catch(error){
    res.send(error);
  }   
}

exports.delete = async(req, res, next) => {       
  try{
    const result = await serviceSales.delete(req.params.id)
    res.send(result);
  }catch(error){
    console.log(error);
    res.send(error);
  } 
}

exports.deleteAll = async(req, res, next) => {       
  try{
    const result = await serviceSales.deleteAllSales()
    res.send(result);
  }catch(error){
    res.status(error).send({message: error});
  } 
}

exports.findIdClient = async(req, res, next) => {   
  try{
    const result = await serviceSales.findByIdClient(req.params.id)
    res.json(result);
  }catch(error){
    res.status(error).send({message: error});
  }      
}

exports.findIdSales = async(req, res, next) => { 
  try{     
    const result = await serviceSales.findIdSales(req.params.id)
    res.json(result);
  }catch(error){
    res.status(error).send({message: error});
  } 
}

exports.findItenIdSales = async(req, res, next) => {   
  try{
    const result = await serviceSales.findItenIdSales(req.params.id)
    res.json(result);
  }catch(error){
    res.status(error).send({message: error});
  }      
}

