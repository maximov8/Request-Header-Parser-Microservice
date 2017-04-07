import express from 'express'
import bodyParser from 'body-parser'

let app = express()
app.use(bodyParser.json())

app.get('/api/whoami', (req, res) => {
  let headers = req.headers
  let ip = headers['x-forwarded-for'] || req.connection.remoteAddress;
  let lang = headers['accept-language'].split(',')[0]
  let os = headers['user-agent'].split(') ')[0].split(' (')[1]
  let whoami = {
    'ip': ip,
    'language': lang,
    'software': os
  }
  res.json(whoami)
})

app.listen(process.env.PORT || 3000, () => {
  console.log("It is working")
})
