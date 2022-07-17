<<<<<<< HEAD
const log= require("./logger")
log("testing")
const list = ["student 1","student 2","student 3"]
list.map(student=>console.log(student))
// console.log(module) // current module


const path = require("path")
const fileLocation = path.join(__dirname, "Lilia.js") // this path doesn't exist we are just creating it 
console.log(fileLocation)

const ext = path.extname(fileLocation)
console.log(fileLocation)

=======
const path = require("path")

const fileLocation = path.join(__dirname,"abir.js")

console.log(fileLocation)

const ext = path.extname(fileLocation)
console.log(ext)

const dir = path.dirname(fileLocation)
console.log(dir)

const name = path.basename(fileLocation)
console.log(name)
>>>>>>> upstream/main
