const redis = require('redis');
const options = {
    url: 'redis://' + process.env.REDIS_URL
}

exports.client = redis.createClient(options);
