exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
        tbl.increments(); 
        tbl.text('name', 255).notNullable(); 
        tbl.text('description', 255)
        tbl.boolean('completed').notNullable().defaultTo(false);
      })
      .createTable('resources', tbl => {
        tbl.increments(); //auto id
        tbl.text('name', 255).unique().notNullable(); 
        tbl.text('description', 255)
        tbl.integer('project_id')
          .unsigned().notNullable().references("id").inTable('projects');
      })
      .createTable('tasks', tbl => {
        tbl.increments(); 
        tbl.text('description', 255).notNullable() 
        tbl.text('notes')
        tbl.integer('project_id')
          .unsigned()
          .references("id")
          .inTable('projects')
        tbl.boolean('completed').notNullable().defaultTo(false);
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };