const serviceSalesitens = require('../service/salesItensService')

exports.findAll = async(req, res, next) => {
  try{
    const result = await serviceSalesitens.findAll()//funcionando
    res.send(result);
  }catch(error){
    res.send(error);
  }    
}

exports.createSales = async(req, res, next) => {
    const data = req.body;
    try{  
    const result = await serviceSalesitens.createSales(data);//funcionando
    res.send(result);
    }catch(error){
      res.send(error);
    }  
}

exports.findbyid = async(req, res, next) => {
  try{
    const result = await serviceSalesitens.findById(req.params.id);//funcionando
    res.send(result);
  }catch(error){  
    res.send(error)
  }    
}

exports.updata = async(req, res, next) => {
    const data = req.body;
    try{
      const result = await serviceSalesitens.updata(req.params.id,data);//funcionando
      res.send(result);
    }catch(error){
      res.send(error);
    }    
}

exports.delete = async(req, res, next) => {    
  try{
    const result = await serviceSalesitens.delete(req.params.id);
    res.send(result);
  }catch(error){
    res.send(error);
  }    
}

exports.deleteAll = async(req, res, next) => {    
  try{
    const result = await serviceSalesitens.deleteAllItens();
    res.send(result);
  }catch(error){
    res.send(error);
  }    
}