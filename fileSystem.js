const fs = require('fs')

//create new file
// fs.appendFile('firstFile.txt',"Hello siwar from file system", function (err) {
//     err ? console.log('err', err) : console.log("saved")
// })

//read file sync
// const res = fs.readFile('./firstFile.txt')
// console.log('res',res.toString())


//read file async

fs.readFile('./firstFile.txt' , (err , data)=>{
    err ? console.log('err', err) : console.log('data', data.toString())
}) 
