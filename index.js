import Express, { text } from "express";
import mongoose from "mongoose";

const app = Express()

mongoose.connect("mongodb://mongodb_abc/dbTest")
.then(console.log("db connected"))
.catch("error")

const dataSchema = new mongoose.Schema({
    name : String
})

const Ant = mongoose.model("Ant",dataSchema)

app.get("/",async(req,res)=>{
    const info = new Ant({name : "aryan"})
    await info.save()
    res.send("hi")
})

app.post("/in",async(req,res)=>{
    const info = new Ant({name : "primta"})
    await info.save()
    res.send("ok")
})

app.get("/all",async(req,res)=>{
    const all = await Ant.find()
    res.send(all)
})

app.listen(3000,()=>{
    console.log("port running on 3000")
})