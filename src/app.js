const express=require("express")
const app=express();
const path=require("path")
const hbs=require('hbs')
const port=process.env.PORT | 8080;
//public static path

const static_path=path.join(__dirname,"../public")
const tamplet_path=path.join(__dirname,"../tampletes/views")
const partial_path=path.join(__dirname,"../tampletes/partials")


app.set('view engine','hbs')
app.set('views',tamplet_path)
hbs.registerPartials(partial_path)
//running a static html file
app.use(express.static(static_path))


app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:"Opps ! Page not found"
    });
})



app.listen(port,(req,res)=>{
    console.log(`listening to the port at ${port}`)
})