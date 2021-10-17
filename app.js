const { json } = require('express');
const express = require('express')
const app = express()
const {getShelters, newShelter} = require("./db/DB.js");

const port = 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/pages/main.html",)
})

app.get('/register', (req, res) => {
  res.sendFile(__dirname + "/pages/register.html")
})

app.get('/userlist', (req, res) => {
  res.sendFile(__dirname + "/pages/userlist.html")
})

app.get('/shelterlist', (req, res) => {
  res.sendFile(__dirname + "/pages/shelterlist.html")
})

app.get('/shelterreg', (req, res) => {
  res.sendFile(__dirname + "/pages/shelterreg.html")
})


//api urls
app.get('/api/shelters', async (req, res) => {
  var shelters = await getShelters();
  res.send(shelters);
})

app.post('/api/shelters', async (req, res) => {
  var args = req.body;
  console.log(args);
  req.send();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})