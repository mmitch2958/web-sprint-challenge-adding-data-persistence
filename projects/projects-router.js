const db = require('../data/db-config.js');

module.exports = {
  findProjects,
  findResources,
  findTasks,
  addProjects, 
  addResources,
  addTasks, 
  findProjectById 
}


function findProjects() {
  return db("projects")
};


function findProjectById(id) {
  return db("projects").where({ id }).first();
};

//GET list of Resources
function findResources() {
  return db("resources")
};


function findTasks() {
  return db("tasks")
};


function findTasks(id) {
  return db("projects")
  .join("tasks", "projects.id", "tasks.project_id")
  .select("projects.project_name", "tasks.id", "projects.description" )
  .where({ project_id: id })
};


function addProjects(project){
  return db('projects').insert({...project})
};

function addResources(resource){
  return db('resources').insert({...resource})
};



function addTasks(task){
  return db('tasks')
  .join('projects')
  .insert({...task})
};