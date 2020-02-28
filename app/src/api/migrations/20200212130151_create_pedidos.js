
exports.up = function(knex) {
    return knex.schema.createTable('sales', function(t) {
        t.increments();
        t.timestamp('created_at').defaultTo(knex.fn.now())
        t.timestamp('updated_at').defaultTo(knex.fn.now())
        t.integer('id_client').notNull();
        t.decimal('value', 6, 2).notNull();
        t.text('decription').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('sales');
};
