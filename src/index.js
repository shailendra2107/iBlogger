const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname, "../public");
const templetePath = path.join(__dirname, "../templete/views");
const partialPath = path.join(__dirname, "../templete/partials");
// const viewPath = path.join(__dirname, "../templete/views");

// to set to views engine 
app.set("view engine", "hbs");
app.set("views", templetePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.get("/contact/*", (req, res) => {
    res.render("404",{
        error: "Opps Page not Found in Contact Page  BACK TO HOME "
    })
})
app.get("/about", (req, res) => {
    res.render("about")
})

app.get("*", (req, res) => {
    res.render("404", {
        error:"Opps Page Not Found"
    })
})

app.get("/", (req, res) => {
    res.send("hiiiii")
})
app.get("/contact", (req, res) => {
    res.send("hello you are in Contact Page")
})
app.get("/about", (req, res) => {
    res.send("hello you are in About us")
})


app.listen(3333, () => {
    console.log('listning port on 3333');

})