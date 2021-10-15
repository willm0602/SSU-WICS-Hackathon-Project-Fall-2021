const express = require('express')
const app = express()
const port = 3000

console.log(__dirname + "pages/index.html");

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


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})