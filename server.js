const http = require('http')
const PORT = process.env.PORT || 9000
const greeting = require('./src/greetings')

http
  .createServer((req, res) => {
    res.end('<h1>' + greeting.sayHello() + '</h1>')
  })
  .listen(PORT, () => console.log('Listening on', PORT))