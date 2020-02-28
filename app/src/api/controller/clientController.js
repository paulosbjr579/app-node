const serviceClient = require('../service/clientService')

exports.findAll = async(req, res, next) => {
  try{
    const result = await serviceClient.findAll();
    res.send(result.data);
  }catch(error){
    res.status(error.response.status).send({message: error.response.data});
  }      
}

exports.createClient = async(req, res, next) => {
    const data = req.body;
    try{
      const result = await serviceClient.createClient(data);      
      res.send(result);
    }catch(error){
      res.send(error);
    }
}

exports.findbyid = async(req, res, next) => {
    try{
      const result = await serviceClient.findById(req.params.id);
      res.send(result.data);
    }catch(error){
      res.status(error.response.status).send({message: error.response.data});
    }
}

exports.updata = async(req, res, next) => {
    const data = req.body;
    try{
      const result = await serviceClient.updata(req.params.id,data);
      res.send(result.data);
    } catch(error){
      res.status(error.response.status).send({message: error.response.data});
    }
}

exports.delete = async(req, res, next) => { 
    try{
      const result = await serviceClient.delete(req.params.id);
      res.send(result.data);
    }catch(error){
      res.status(error.response.status).send({message: error.response.data});
    }
}

exports.deleteAll = async(req, res, next) => { 
  try{
    const result = await serviceClient.deleteAll();
    res.send(result);
  }catch(error){
    res.status(error).send({message: error.response.data});
  }
}

exports.findbyname = async(req, res, next) => {
  try{
    const result = await serviceClient.findByName(req.params.name);
    res.send(result.data);
  }catch(error){
    res.status(error.response.status).send({message: error.response.data});
  }
}