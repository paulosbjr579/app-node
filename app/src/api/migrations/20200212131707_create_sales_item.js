
exports.up = function(knex) {
    return knex.schema.createTable('sales_item', function(t) {
        t.increments();
        t.timestamp('created_at').defaultTo(knex.fn.now())
        t.timestamp('updated_at').defaultTo(knex.fn.now())
        t.integer('id_product').notNull();
        t.integer('qtd').notNull();
        t.decimal('price', 6, 2).notNull();
        t.integer('id_sales').unsigned();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('sales_item');
};
