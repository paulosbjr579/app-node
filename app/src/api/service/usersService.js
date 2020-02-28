const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig);
const bcrypt = require('bcrypt');

exports.findAll = async() => {
    let usersResult = null;
    try {
      usersResult = await knex.select().table('users');
      return usersResult;
    } catch (error) {
        throw error;
    }
}

exports.createUser = async(data) => {
    let usersResult = null;
    let select = await knex('users').where('user',data.user);
    if(select[0] != undefined)
      return "existe";

    if(data.user == "string" || data.user == null || data.user == undefined || data.pass == "string" || data.pass == null || data.pass == undefined)
        return "falta";

    try {
      usersResult = await knex('users')
      .insert({
        user: data.user,
        pass: bcrypt.hashSync(data.pass, 10)
      });
    }catch (error) {
      throw error;
    }
    return usersResult;
}

exports.findById = async(id) => {
    let usersResult = null;
    try {
      usersResult = await knex('users').where('id',id);
      return usersResult;
    } catch (error) {
      throw error;
    } 
}

exports.updata = async(id,data) => {
    let usersResult = null;
    let select = await knex('users').where('user',data.user);
    if(select[0] != undefined){
      if(id != select[0].id){
      return "not";
      }
    }

    try {
      usersResult = await knex('users')
      .where('id', id)
      .update({
        user: data.user,
        pass: bcrypt.hashSync(data.pass, 10),
        active: data.active
      });
      console.log(id);
      return usersResult;
    } catch (error) {
      throw error;
    }     
}

exports.delete = async(id) => { 
    let usersResult = null;
    try {
      usersResult = await knex('users')
      .where('id', id)
      .del()
      return usersResult;
    } catch (error) {
      throw error;
    } 
}

exports.deleteAll = async() => { 
  let usersResult = null;
  try {
    usersResult = await knex('users')
      .where('id','>', 0)
      .del()
    return usersResult;
  } catch (error) {
    throw error;
  } 
}

exports.findByName = async(user) => {
  let usersResult = null;
  try {
    usersResult = await knex('users').where('user',user);
    return usersResult;
  } catch (error) {
    throw error;
  } 
}