require('dotenv').config()
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/google',(req,res)=>{
    res.send('Sandeep Choudhary')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Yaha Login kro</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});