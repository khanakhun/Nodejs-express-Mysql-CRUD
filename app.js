const express = require('express');
const bodyParser = require('body-parser');
const app =express();

const PORT = 8080;
require('dotenv').config()

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})








app.listen(PORT,()=> console.log(`Server listening on Port ${PORT}`))