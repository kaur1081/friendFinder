var express = require('express');
var app = express();
// var bodyParser = required('body-parser');
// var path = require("path");

 var PORT = process.env.PORT || 8080;
//  creating application


 app.use(express.urlencoded({ extended: true }));

 app.use(express.json());

//  app.use(express.json({type: 'application/**json'}));

//  app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));

//  app.use(bodyParser.text({type: 'text/html'}));

 require("./app/routing/apiRoutes.js")(app);
 require("./app/routing/htmlRoutes.js")(app);

 app.listen(PORT, function() {
   console.log("Server listening on: http://localhost:" + PORT);
 });
  