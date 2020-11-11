const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.write('<h1>This is Home page</h1>');
    res.send();
})
app.get("/contact", (req, res) => {
    res.send('This is Contact page');
})
app.get("/about", (req, res) => {
    res.send([
        {
            id: 23,
            name: "khush"
        },
        {
            id: 24,
            name: "khush"
        },
        {
            id: 25,
            name: "khush"
        },
        {
            id: 26,
            name: "khush"
        },
        {
            id: 27,
            name: "khush"
        }
    ]);
})

app.listen(3232, () => {
    console.log('This is on 3232');

})