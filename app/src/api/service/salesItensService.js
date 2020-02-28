const knexConfig = require("../knexfile")
const knex = require("knex")(knexConfig)
const serviceSales = require('../service/salesService')
const serviceProduct = require('../service/procuctService')

exports.findAll = async () => {//funcionando
    try {
        const result = await knex.select().table('sales_item')
        return result;
    } catch (error) {
      throw error;
    }
}

exports.createSales = async (data) => {//funcionando
    let clientResult = null;
    let up = null;
    let price = null;
    let valuev = null;
    try {
        clientResult = await serviceSales.findById(data.id_sales);
        valuev = clientResult[0].value;
    } catch (error) {
      throw error;
    }

    try {
        productResult = await serviceProduct.findById(data.id_product);
        price = productResult.data.value;
    } catch (error) {
      throw error;
    }

    if (data.id_product != "" && data.qtd != "" && data.id_sales != "") {
      const result = await knex('sales_item').insert({
        id_product: data.id_product,
        qtd: data.qtd,
        price: price,
        id_sales: data.id_sales
      });
      const up = await knex('sales').where('id', data.id_sales).update({
        value: (valuev + (data.qtd * price))
      });
      return {
        message: "sales item id " + result[0] + " inserido com sucesso!!"
      };
    }
    return {
      message: "falta dados"
    };        
}

exports.findById = async (id) => {//funcionando
    try {
        const sresult = await knex('sales_item').where('id', id);
        return sresult;
    } catch (error) {
      throw error;
    }
}

exports.updata = async (id,data) => {
  let clientResult = null;
  let productResult = null;
  let salesItensResult = null;
  let qtd = null;
  let price = null;
  let valuev = null;
  let solu = 1;
  
  try {
      clientResult = await serviceSales.findById(data.id_sales);
      valuev = clientResult[0].value;
      if(valuev == 0){
        solu = -1
      }
  } catch (error) {
    throw error;
  }

  try {
      productResult = await serviceProduct.findById(data.id_product);
      price = productResult.data.value;
  } catch (error) {
    throw error;
  }

  try {
    salesItensResult = await this.findById(id);
    qtd = salesItensResult[0].qtd;
  } catch (error) {
    throw error;
  }

  if (data.id_product != "") {
    const result = await knex('sales_item')
      .where('id', id)
      .update({
      id_product: data.id_product,
      qtd: data.qtd,
      price: price
    });
    
    const up = await knex('sales')
      .where('id', data.id_sales)
      .update({
      value: (solu * (valuev - (qtd * price)) + data.qtd * price)
    });
    // console.log(valuev)
    // console.log(qtd)
    // console.log(price)
    // console.log(data.qtd)
    // console.log("-------------------")
    // console.log((valuev - (qtd * price)))
    // console.log("+")
    // console.log(data.qtd * price)
    // console.log("=")
    // console.log(solu * (valuev - (qtd * price)) + (data.qtd * price))
    // console.log("-------------------")
    // console.log("-------------------")
    return {
      message: "sales item id " + result + " alterado com sucesso!!"
    };
  }
  return {
    message: "falta dados"
  };    
}

exports.delete = async(id) => {    
    let clientResult = null;
    let productResult = null;
    let salesItensResult = null;
    let price = null;
    let valuev = null;
    let qtd = null;
    let id_product = null;
    let id_sales = null;

    try {
      salesItensResult = await this.findById(id);
      qtd = salesItensResult[0].qtd;
      id_product = salesItensResult[0].id_product;
      id_sales = salesItensResult[0].id_sales;
      // console.log(qtd)
      // console.log(id_product)
      // console.log(id_sales)
      // console.log("----------------/n--------------")
    } catch (error) {
      throw error;
    }

    try {
        clientResult = await serviceSales.findById(id_sales);
        valuev = clientResult[0].value;
        // console.log(valuev)
        // console.log("----------------/n--------------")
    } catch (error) {
      throw error;
    }

    try {
        productResult = await serviceProduct.findById(id_product);
        // console.log(productResult)
        price = productResult.data.value;
        // console.log(price)
        // console.log("----------------/n--------------")
        // console.log("----------------/n--------------")
    } catch (error) {
      throw error;
    }

  if(id != undefined && id != ""){
      const result = await knex('sales_item')
      .where('id', id)
      .del()
      // console.log(result)
      // console.log("----------------/n--------------")
      const up = await knex('sales').where('id', id_sales).update({
        value: (valuev - (qtd * price))
      });
        // console.log((valuev - (qtd * price)))
        // console.log(up)
        // console.log("----------------/n--------------")
      
      if(result == 1){
        return{message: "sales item id "+id+" deletado com sucesso!!"};
      }
      return{message: "sales item id "+id+" não pode ser deletado"};
  }
  return{message: "falta id"};
}

exports.deleteAll = async (id) => {
    if (id != undefined && id != "") {

      try{
        const up = await knex('sales').where('id', id).update({
          value: 0
        });
      }catch(error){
        throw error;
      } 
        
      try{
        const result = await knex('sales_item')
            .where('id_sales', id)
            .del();
          //   return {
          //     message: "todos sales itenm id " + id + " deletado com sucesso!!"
          // };        
      }catch(error){
        throw error;
      }

      try{
        const result = await knex('sales')
            .where('id', id)
            .del();
             return {
               message: "sales e todos sales item id " + id + " deletado com sucesso!!"
           };        
      }catch(error){
        throw error;
      }
      
    }
    return {
        message: "falta id"
    };
}

exports.deleteAllItens = async () => {      
    try{
      const result = await knex('sales_item')
          .where('id',">", 0)
          .del();
        //   return {
        //     message: "todos sales itenm id " + id + " deletado com sucesso!!"
        // };        
    }catch(error){
      throw error;
    }
}
