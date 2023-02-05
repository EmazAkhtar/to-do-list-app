const express= require("express");
const bodyParser= require("body-parser");

const app= express();

var items=[];
var workItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function(req,res){

    const today= new Date();
    
    var options= {
        weekday: "long",
        day: "numeric",
        month:"long"
    };

    var day= today.toLocaleDateString("en-US",options);

    res.render("list", {listType:day,newItems:items});
    
});
app.post("/",function(request,response){

    var item=request.body.item;
    if(request.body.list==="Work"){
    workItems.push(item);
    response.redirect("/work");
    }
    else{
     items.push(item);
     response.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{listType:"Work",newItems:workItems});
});

app.get("/about",function(req,res){
   res.render("about");
});
app.listen(3000,function(){
    console.log("server started at port 3000");
});