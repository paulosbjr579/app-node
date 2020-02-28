const axios = require('axios')
require("dotenv").config()

const url_api_product = process.env.URL_API_PRODUCT;

exports.findAll = async() => {
    let productResult = null;
    try {
      productResult = await axios.get(url_api_product  + '/api/product');
      return productResult;
    } catch (error) {
      throw error;
    } 
}

exports.createProduct = async(data) => {
    let productResult = null;
    try {
        productResult = await axios.post(url_api_product  + '/api/product', {
        name: data.name,
        value: data.value
      });
      return productResult;
    } catch (error) {
      throw error;
    } 
}

exports.findById = async(id) => {
    let productResult = null;
    try {
        productResult = await axios.get(url_api_product  + '/api/product/'+id);
        return productResult;
    } catch (error) {
      throw error;
    } 
}

exports.updata = async(id,data) => {
    let productResult = null;
    try {
        productResult = await axios.put(url_api_product  + '/api/product/'+id, {
        name: data.name,
        value: data.value
      });
      return productResult;
    } catch (error) {
      throw error;
    }     
}

exports.delete = async(id) => { 
    let productResult = null;
    try {
        productResult = await axios.delete(url_api_product  + '/api/product/'+id);
        return productResult;
    } catch (error) {
      throw error;
    } 
}

exports.deleteAll = async() => { 
  let productResult = null;
  try {
      productResult = await axios.delete(url_api_product  + '/api/product/');
      return productResult;
  } catch (error) {
    console.log(error);
    throw error;
  } 
}

exports.findByName = async(name) => {
  let productResult = null;
  try {
      productResult = await axios.get(url_api_product  + '/api/product/findByName/'+name);
      return productResult;
  } catch (error) {
    throw error;
  } 
}