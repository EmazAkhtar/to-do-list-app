const express= require("express");
const bodyParser= require("body-parser");

const app= express();

var items=[];
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/",function(req,res){

    const today= new Date();
    
    var options= {
        weekday: "long",
        day: "numeric",
        month:"long"
    };

    var day= today.toLocaleDateString("en-US",options);

    res.render("list", {kindOfDay:day,newItems:items});
    
});
app.post("/",function(request,response){
    
    items.push(request.body.item);
    response.redirect("/");
});


app.listen(3000,function(){
    console.log("server started at port 3000");
});