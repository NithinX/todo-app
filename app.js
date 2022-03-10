const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000 ;

var listarray=["Buy food","cook food","eat food"];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');


app.get("/",function (req,res) {

    res.render("lists",{day:displayDate(),weektype:currentDayStatus(), items:listarray});
});


app.post("/",function(req,res){
    var item = req.body.itemName;
    listarray.push(item);
    res.redirect("/");
});



function displayDate(){
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

var day = today.toLocaleDateString("en-US", options);

return day;
}



function currentDayStatus(){
    var today = new Date();
    var currentDay = today.getDay();
    var day="";
    
    if (currentDay === 6 || currentDay === 0){
        day ="Weekend";
    }else{
        day = "Weekday";
    }
    return day;
}

app.listen(port,function () {
    console.log("Server started on port: "+port);
});