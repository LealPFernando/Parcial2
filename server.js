const { response, request } = require("express")
var express = require("express")
var app = express()
var port = 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", function(request, response){
    response.send("You are on the homepage")
})

app.post("/post", function(request, response){
    var user = request.body.user
    response.send("Welcome " + user)
})

app.delete("/delete", function(request, response){
    response.send("{deleted:true}")
})

app.put("/put/:ID", function(request, response){
    response.send("Task " + request.params.ID + " has been updated")
})



app.listen(port, function(){
    console.log("Server on PORT: " + port)
})

