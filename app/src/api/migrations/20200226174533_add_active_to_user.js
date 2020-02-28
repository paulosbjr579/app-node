
exports.up = function(knex) {
    return knex.schema.table('users', function(t) {
        t.boolean('active').notNull().defaultTo(true);
    });
};

exports.down = function(knex) {
    return knex.schema.table('users', function(t) {
        t.dropColumn('active');
    });
};
