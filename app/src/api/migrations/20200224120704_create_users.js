
exports.up = function(knex) {
    return knex.schema.createTable('users', function(t) {
        t.increments();
        t.timestamp('created_at').defaultTo(knex.fn.now())
        t.timestamp('updated_at').defaultTo(knex.fn.now())
        t.text('user').notNull();
        t.text('pass').notNull();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
