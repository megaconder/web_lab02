const express = require ("express")
const app = express ()

app.get ("/test", (req,res) => {
    res.send ("The server is working correctly")
}) 

app.listen (8080, () => {
    console.log ("API-ervice is working")
})