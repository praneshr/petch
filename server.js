import Express from 'express'
import path from 'path'
import request from 'request'
import config from './config/api-config'
const app = new Express()

app.use(Express.static('build'))

app.get('/news', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'))
})

app.get('/', (req, res) => {
  res.redirect('/news')
})

app.get('/api/:url', (req, res) => {
  request.get(`${config.host}${config[req.params.url]}`, (err, response, body) => {
    res.json(JSON.parse(body))
  })
})


app.listen(9090, () => {
  console.log(`Running at ${9090}`);
});