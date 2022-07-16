const log = (message)=>{
    console.log("the message is",message)
}

const log2 = (message)=>{
    console.log("the message 2 is",message)
}

module.exports.log = log
module.exports.log2 = log2

console.log(module)