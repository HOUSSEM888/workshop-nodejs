const http = require('http')


// const reqListner = function(req,res){
//     res.writeHead(200)
//     res.end('hello world from node js')
// }

const reqRoutes = function(req,res){
    if (req.url === "/") {
        res.write('hello world from node js')
        res.end()
    } else if (req.url === "/user") {
        res.write('hello to my profile')
        res.end()
    }else{
        res.write('not found')
        res.end()
    }

}



const server = http.createServer(reqRoutes)


server.listen(5000, (err)=>{
    err ? console.log('err', err) : console.log("server is running on port 5000")
})