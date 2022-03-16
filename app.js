const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();

const port = process.env.PORT || 3000;

let listarray = ["Buy food", "cook food", "eat food"];
let workarray = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine', 'ejs');


app.get("/", function (req, res) {
    res.render("lists", { listTitle: date.displayTitle(), weektype: date.currentDayStatus(), items: listarray });
});

app.get("/work", function (req, res) {
    res.render("lists", { listTitle: "work", items: workarray });
})

app.post("/", function (req, res) {
    let item = req.body.itemName;
    if (req.body.button == "work") {
        workarray.push(item);
        res.redirect("/work");
    } else {
        listarray.push(item);
        res.redirect("/");
    }
});


app.listen(port, function () {
    console.log("Server started on port: " + port);
});