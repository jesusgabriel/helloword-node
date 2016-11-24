const express = require('express');
const app = express();
const PORT = 2999;

app.get('/', function(req, res){
  res.send('It is working my server')
});
app.listen(PORT, function(){
  console.log("server listenig now");
});
