import Express from 'express'
import path from 'path'
const app = new Express()

app.use(Express.static('build'))

app.get('/news', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'))
})

app.get('/', (req, res) => {
  res.redirect('/news')
})


app.listen(9090, () => {
  console.log(`Running at ${9090}`);
});