const express = require("express")
const fs = require("fs")
const path = require("path")
const dirName = path.join(__dirname,"times")

const app = express()

app.get("/",(req, res)=>{
    res.send("hey iam working fine 🎈")
})

app.get("/date-time",(req, res)=>{
    let date = new Date();
    let currentTimeStamp = date.toUTCString().slice(0,-3).split(" ").join("").replace(/:/g, '');
    let content = `The current TimeStamp : ${currentTimeStamp}` 
    console.log(dirName) 
    fs.writeFile(`${dirName}/${currentTimeStamp}.txt`, content, (err)=> {
        if (err){
            console.log(err)
            res.send("Error in creating the file")
            return
        }
       res.sendFile(path.join(dirName, `${currentTimeStamp}.txt`))
    })
})

app.listen(9000, () => console.log("server is started in localhost:9000") )