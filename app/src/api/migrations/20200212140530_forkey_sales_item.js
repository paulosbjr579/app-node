exports.up = function(knex) {
    return knex.schema.table("sales_item", table => {
        table.foreign("id_sales").references("sales.id");
    });
};
exports.down = function(knex) {
    return knex.schema.table("sales_item", table => {
        table.dropForeign("id_sales");
    });
};