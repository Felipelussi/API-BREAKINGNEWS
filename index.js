const express = require ('express');
const app = express();

const userRoute = require('./src/routes/user.route');

const port = 3000;

app.use(express.json());

app.use('/user', userRoute)


app.get('/home',  (req, res) => {

  const soma =  1+1;

  res.json(soma);

})



app.listen(port,() => console.log(`Servidor rodando na porta ${port}`));