const express = require('express');
const app = express();

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

app.get("/",function(req,res){
    res.send('<h1>Welcome to our app</h1>')
});

let port = process.env.PORT||3500;
app.listen(port,function() {
    console.log(`server is listening on port ${port}`);
});




