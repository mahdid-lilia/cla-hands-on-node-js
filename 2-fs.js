const fs = require("fs");
fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); // "utf8" to read characters


fs.writeFile("message.txt", "Nez content", {}, (err)=>{
    if (err) throw err
    console.log("content written")
})


// Here we are seeing the non blocking approch we are reading the most faster file

fs.appendFile("message.txt", "\n test", (err)=>{
    if (err) throw err
    console.log("content appended")
})