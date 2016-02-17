var express    = require('express');

var studentWs  = require('./studentsWS');
var bearWs  = require('./bearWS');

var routes = express.Router();

routes.use('/students', studentWs);
routes.use('/bears', bearWs);

module.exports = routes;