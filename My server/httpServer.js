



const http = require('http')
const url = require('url')

const server = http.createServer((request, response)=>{
    console.log(request.url)
    console.log(request.method)
     response.writeHead(200, 'text/plain')
     response.write('this is your resposne')
     response.end()
})

server.listen( 3000, ()=>{
  console.log("server has started")
})

console.log("This program is woprking")