const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/nate', (req,res) => {res.send("Hello Nate")});
app.get('/sean', (req,res) => {res.send("Hello Dallas")}); 

app.listen(port, ()=>console.log("Listening"));