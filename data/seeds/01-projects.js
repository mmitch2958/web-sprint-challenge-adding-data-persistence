
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Project 1', description:'something here'},
        {name: 'Project 2'}, 
        {name: 'Project 3', description:'some other description'},
      ]);
    });
};