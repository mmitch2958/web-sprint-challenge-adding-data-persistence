const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../projects/projects-router');

const db =require('../data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());


server.use('/api/projects', projectsRouter);



server.get('/api/projects', (req, res) => {
  db('projects')
  .then(project => {
    res.status(200).json({ data: project });
  })
  .catch(err => {
    res.status(500).json({ 
      message: "There was a problem getting the projects",
      error: err.message
    });
  });
});


module.exports = server;
