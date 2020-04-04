const express = require("express");


const routes = express();
const createController = require('./controllers/repoControllers');


routes.post('/add', createController.create);
routes.get(`/repositories`, createController.index);
routes.delete('/repositories', createController.delete)


module.exports = routes;