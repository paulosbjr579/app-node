const serviceUsers = require('../service/usersService')

exports.findAll = async(req, res, next) => {
  try{
    const result = await serviceUsers.findAll();
    res.send(result);
  }catch(error){
    res.send({message: "error ao buscar"});
  }      
}

exports.createUser = async(req, res, next) => {
    const data = req.body;
    try{
      const result = await serviceUsers.createUser(data);
      if(result == "existe")
          res.send("usuario ja existe!!!");
      if(result == "falta")
          res.send("falta dados e/ou seu nome e senha não pode string!!!");
      res.send("user id ja "+result+" criado com sucesso!!!");
    }catch(error){
      res.send({message: "error ao criar usuário"});
    }
}

exports.findbyid = async(req, res, next) => {
    try{
      const result = await serviceUsers.findById(req.params.id);
      res.send(result);
    }catch(error){
      res.send({message: "erro ao bucar por id"});
    }
}

exports.updata = async(req, res, next) => {
    const data = req.body;
    try{
      let result = await serviceUsers.updata(req.params.id,data);
      if(result == "not"){
        res.send({message: "esse usuario ja existe"});
      }
      res.send({message: "Usuario atualizado com sucesso!!!"});
    } catch(error){
      res.send({message: "erro ao alterar"});
    }
}

exports.delete = async(req, res, next) => { 
    try{
      const result = await serviceUsers.delete(req.params.id);
      if(result == 1)
      res.send({message: "Deletado com sucesso!!!"});
      res.send({message: "não existe!!!"});
    }catch(error){
      res.send({message: "erro ao deletar e/ou item não existente!!!"});
    }
}

exports.deleteAll = async(req, res, next) => { 
  try{
    const result = await serviceUsers.deleteAll();    
    res.send({message: "Deletados com sucesso!!!"});
  }catch(error){
    res.send({message: "erro ao deletar todo e/ou itens não existentes!!!"});
  }
}

exports.findbyname = async(req, res, next) => {
  try{
    const result = await serviceUsers.findByName(req.params.user);
    res.send(result);
  }catch(error){
    res.send({message: "erro ao buscar por nome"});
  }
}