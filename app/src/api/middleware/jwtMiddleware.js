const serviceUser = require('../service/usersService')
const jwt = require('jsonwebtoken');
require("dotenv").config();

const jwt_secret = process.env.JWT_SECRET;

const redis = require("redis");
const redisClient = require('../config/redis').client;

exports.verifyJWT = (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['token'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, jwt_secret, async function(err, decoded) {//async colocar para o await funcionar
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    // console.log(await getUserRedis(req.userId))
    const getuser = await getUserRedis(req.userId);
    if(getuser == null || getuser == undefined){
      var resultUserSelect = await serviceUser.findById(req.userId);
      redisClient.set(req.userId,JSON.stringify({user:resultUserSelect[0].user,active:resultUserSelect[0].active}));
      redisClient.expire(req.userId,60*5,redis.print);
    }
    var resultEnd = await getUserRedis(req.userId);
    // console.log(resultEnd)
    // console.log(resultEnd.active)
    if(resultEnd.active != 1)
    {
      return res.status(401).send({ auth: false, message: 'without permission'});
    }

    next();
  });
}

function getUserRedis(id) {
  return new Promise((resolve) => {
    redisClient.get(id, async (error, resultRedis) => {
      if (resultRedis !== undefined && resultRedis !== null) {
        resolve(JSON.parse(resultRedis));
      }
      resolve(undefined);
    });
  });
}