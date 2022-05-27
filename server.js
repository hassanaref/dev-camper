const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path:'./config/config.env'})
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server running is ${process.env.NODE_ENV} mode on port ${port}`)
})