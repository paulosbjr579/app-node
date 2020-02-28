const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const redis = require("redis");
const redisClient = require('../config/redis').client;

require("dotenv").config()

const jwt_secret = process.env.JWT_SECRET;

exports.login = async(req, res, next) => {
    const data = req.body;

    var resultUser = await knex('users').where('user',data.user);

    if(resultUser[0] == undefined) {
        res.status(500).send('Usuario não existe!!!');
    }
    const pass = bcrypt.compareSync(data.pass, resultUser[0].pass);
    if(pass != true){
        res.status(500).send('Login inválido!!!');
        return;
    }
    //auth ok
    const id = resultUser[0].id //esse id viria do banco de dados
    redisClient.set(id,JSON.stringify({user:resultUser[0].user,active:resultUser[0].active}));
    redisClient.expire(id,60*5);

    var token = jwt.sign({ id },jwt_secret, {
        expiresIn: 86400 // expires in 5min
    });
    res.status(200).send({ auth: true, token: token });
}

exports.view = async(req, res, next) => {
    res.status(200).send('dsfasdfdafdfsa');
}

function getUserRedis() {
    return new Promise((resolve) => {
        const keyRedis = 'user';
        redisClient.get(keyRedis, async (error, resultRedis) => {
            if (resultRedis !== undefined && resultRedis !== null) {
                resolve(JSON.parse(resultRedis));
            }
            resolve(undefined);
        });
    });
}


