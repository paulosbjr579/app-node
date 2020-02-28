const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig);

exports.migrate = () => new Promise((resolve, reject) => {
    knex.migrate.latest([knexConfig]).then(() => {
        console.log('Migrate executada com sucesso')
        resolve(true)
    }).catch(error => {
        console.log('erro in execute migrate ', error);
        reject(error);
    });
})
exports.knex = () => {
    return knex
};