const axios = require('axios')
require("dotenv").config()

const url_api_client = process.env.URL_API_CLIENT;

exports.findAll = async() => {
    let clientResult = null;
    try {
      clientResult = await axios.get(url_api_client + '/client');
      return clientResult;
    } catch (error) {
      throw error;
    } 
}

exports.createClient = async(data) => {
    let clientResult = null;
      try {
        clientResult = await axios.post(url_api_client + '/client', {
          cpf: data.cpf,
          datanasc: data.datanasc,
          name: data.name
        });    
      }catch (error) {
        throw error;
      }
      return { message:"cliente id "+clientResult.data};
}

exports.findById = async(id) => {
    let clientResult = null;
    try {
      clientResult = await axios.get(url_api_client + '/client/'+id);
      return clientResult;
    } catch (error) {
      throw error;
    } 
}

exports.updata = async(id,data) => {
    let clientResult = null;
    try {
      clientResult = await axios.put(url_api_client + '/client/'+id, {
        cpf: data.cpf,
        datanasc: data.datanasc,
        name: data.name
      });
      return clientResult;
    } catch (error) {
      throw error;
    }     
}

exports.delete = async(id) => { 
    let clientResult = null;
    try {
      clientResult = await axios.delete(url_api_client + '/client/'+id);
      return clientResult;
    } catch (error) {
      throw error;
    } 
}

exports.deleteAll = async() => { 
  let clientResult = null;
  try {
    clientResult = await axios.delete(url_api_client + '/client/all');
    return clientResult;
  } catch (error) {
    throw error;
  } 
}

exports.findByName = async(name) => {
  let clientResult = null;
  try {
    clientResult = await axios.get(url_api_client + '/client/findName/'+name);
    return clientResult;
  } catch (error) {
    throw error;
  } 
}