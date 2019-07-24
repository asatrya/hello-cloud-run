const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Cloud Run v3')
  })
  .listen(PORT, () => console.log('Listening on', PORT))