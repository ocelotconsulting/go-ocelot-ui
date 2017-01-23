const fs = require('fs')
const express = require('express')
const app = express()

// integrate api here
app.use('/api', require('./api'))

if (process.env.NODE_ENV !== 'production') {
  require('./dev')(app)
}

app.use('/', express.static('public'))

const html = fs.readFileSync('index.html', {encoding: 'utf8'})

app.get('/*', (req, res) => res.send(html))

const port = parseInt(process.env.PORT, 10) || 3002

// error handler
// noinspection JSUnusedLocalSymbols
app.use('/', (error, req, res, next) => {
  if (error) {
    error.stack && console.error(error.stack)
    res.status(500).json(error)
  } else {
    next()
  }
})

app.listen(port, () => console.log(`running: http://localhost:${port}`))
