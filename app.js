//----------Requerir los paquetes q vamos a utilizar--------
const express = require("express"); //Me traigo express
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express() //Ejecutamos la funcion que traigo de express

//1- npm init
//2- npm install express
//3- crear app.js
//4- Node app.js


//------Declarar los recursos estaticos (donde se encuentra  public)-----
app.use(express.static(path.join(__dirname, "public"))); 

//-----------MANEJO DE RUTAS.---------
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "views", "register.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")));
//------Poner a correr el servidor-------
app.listen(PORT, () =>  console.log ('Servidor corriendo en el puerto: ' + PORT));

app.post("/register", (req,res) =>{
    res.redirect("/")
})

app.post("/login", (req,res) =>{
    res.redirect("/")
})