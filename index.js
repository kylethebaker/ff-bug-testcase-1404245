const express = require('express')
const basicAuth = require('express-basic-auth')
const app = express()
const port = 3000

app.use(basicAuth({
  users: { 'user': 'password' },
  challenge: true,
}));
app.use(express.static('static'));
app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})
