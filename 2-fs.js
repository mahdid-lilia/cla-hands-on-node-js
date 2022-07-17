<<<<<<< HEAD
const fs = require("fs");
fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); // "utf8" to read characters


fs.writeFile("message.txt", "Nez content", {}, (err)=>{
=======
const fs = require("fs")

fs.readFile("message.txt","utf8",(err,data)=>{
    if(err) throw err
    console.log(data)
})

fs.writeFileSync("message.txt","Nez content",{},(err)=>{
>>>>>>> upstream/main
    if (err) throw err
    console.log("content written")
})

<<<<<<< HEAD

// Here we are seeing the non blocking approch we are reading the most faster file

fs.appendFile("message.txt", "\n test", (err)=>{
=======
fs.appendFileSync("message.txt","\n test",(err)=>{
>>>>>>> upstream/main
    if (err) throw err
    console.log("content appended")
})