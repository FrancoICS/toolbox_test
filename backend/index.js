const { json } = require('express')
const express = require('express')
const bodyparser = require('body-parser');


const app = express()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });
//TOOLBOX API
app.use('/api', require('./routes/api'));
//MANEJO DE ERRORES
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});




app.listen(3000, () => {
})