const knexConfig = require("../knexfile")
const knex = require("knex")(knexConfig)
require("dotenv").config()
const serviceClient = require('../service/clientService')
const serviceSalesitens = require('../service/salesItensService')

exports.findAll = async() => {
  try{
    const result = await knex.select().table('sales')
    return result;
  }catch(error){
    throw error;
  }    
}

exports.createSales = async(data) => {
      let clientResult = null;
      try {
        clientResult = await serviceClient.findById(data.id_client);
      } catch (error) {
        throw error;
      }

      if(data.id_client != "" && data.decription != ""){
        const result = await knex('sales').insert({id_client:data.id_client,value:0,decription:data.decription})
        return {message: "sales id "+result[0]+" inserido com sucesso!!"};
      }
      return {message: "falta dados"};
}

exports.findById = async(id) => {
  try{
    const result = await knex('sales').where('id',id);
    return result;
  }catch(error){
    throw error;
  }
}

exports.updata = async(id,data) => {
    let clientResult = null;
    try {
      clientResult = await serviceClient.findById(data.id_client);
    } catch (error) {
      throw error;
    }

      if(data.id_client != "" && data.decriptio != ""){
        const result = await knex('sales')
        .where('id', id)
        .update({
          id_client:data.id_client,
          decription:data.decription        
        });
        return{message: "sales id "+id+" atualizado com sucesso!!"};
      }
      return{message: "falta dados"};
}

exports.delete = async(id) => {    
    if(id != undefined && id != ""){
        try{
          serviceSalesitens.deleteAll(id);
        } catch(error){
          throw error;
        } 

        if(result == 1){
          return{message: "sales id "+id+" deletado com sucesso!!"};
        }
        return{message: "sales id "+id+" não pode ser deletado"};
    }
    return{message: "falta id"};
}

exports.deleteAll = async(id) => {    
  if(id != undefined && id != ""){
      const result = await knex('sales')
      .where('id_client', id)
      .del()
      if(result == 1){
        return{message: "todos sales id "+id+" deletado com sucesso!!"};
      }
      return{message: "todos sales id "+id+" não pode ser deletado"};
  }
  return{message: "falta id"};
}

exports.deleteAllSales = async(i) => {  
      const resultItemns = await serviceSalesitens.deleteAllItens();
      const result = await knex('sales')
      .where('id',">", 0)
      .del()
      if(result == 1){
        return{message: "todos sales e itens deletados com sucesso!!"};
      }
      return{message: "todos sales e itens não podem ser deletados"};
}

exports.findByIdClient = async(id) => {
  try{
    const result =  await knex
    .select('sales.id', 'sales.id_client', 'sales.decription', 'value', 
    'sales_item.id_product', 'sales_item.qtd', 'sales_item.price')
    .from('sales')
    .where({ 'sales.id_client': id })
    .leftJoin('sales_item', { 'sales.id': 'sales_item.id_sales' }); 


    const salesResult = {};
    result.forEach(row => {
        if ( !(row.id in salesResult) ) {
            salesResult[row.id] = {
                id: row.id,
                id_client: row.id_client,
                decription: row.decription,
                value: row.value,
                itens: []
            }
        }
        salesResult[row.id].itens.push({
            id_product: row.id_product,
            qtd: row.qtd,
            price: row.price
        });
    });

    var objMap = new Map(Object.entries(salesResult));

    const r = []
    objMap.forEach((item, key) => { r.push(item) });

    return r

  }catch(error){
    throw error;
  }
}

exports.findIdSales = async(id) => {
  try{
    const result =  await knex
    .select('sales.id', 'sales.id_client', 'sales.decription', 'value', 
    'sales_item.id_product', 'sales_item.qtd', 'sales_item.price')
    .from('sales')
    .where({ 'sales.id': id })
    .leftJoin('sales_item', { 'sales.id': 'sales_item.id_sales' }); 


    const salesResult = {};
    result.forEach(row => {
        if ( !(row.id in salesResult) ) {
            salesResult[row.id] = {
                id: row.id,
                id_client: row.id_client,
                decription: row.decription,
                value: row.value,
                itens: []
            }
        }
        salesResult[row.id].itens.push({
            id_product: row.id_product,
            qtd: row.qtd,
            price: row.price
        });
    });
    return salesResult;
  }catch(error){
    throw error;
  }
}

exports.findItenIdSales = async(id) => {
  try{
    const result =  await knex
    .select('*')
    .from('sales_item')
    .where({ 'id_sales': id }); 


    // const salesResult = {};
    // result.forEach(row => {
    //     if ( !(row.id in salesResult) ) {
    //         salesResult[row.id] = {
    //             itens: []
    //         }
    //     }
    //     salesResult[row.id].itens.push({
    //         id_product: row.id_product,
    //         qtd: row.qtd,
    //         price: row.price
    //     });
    // });

    return result;
  }catch(error){
    throw error;
  }
}