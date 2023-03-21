import express from 'express'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors({origin: true, credentials: true}))

app.get('/', function(req, res) {
  res.send('Hello!')
  console.log('Hello World!')
})

app.post('/', function (req, res) {
  console.log(req.body);
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})