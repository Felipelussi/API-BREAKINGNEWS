const express = require('express')
const app = express()



//ROTA
// method HTTP - CRUD (CREATE, READ, UPTDATE, DELETE)
  //GET - pega uma info
  //POST - Cria uma info
  //PUT - altera toda a infos
  //PATH - altera parte da info
  //DELETE - apaga uma info

// Name - Um identificador da rota

// Function (calback) - Responsável por enxecutar algum comando

app.get('/home',  (req, res) => {

  const soma =  1+1;

  res.json(soma);

})



app.listen(3000);