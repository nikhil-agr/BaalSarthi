const express = require("express");
const app = express();
const path = require("path");
const Totalentries = require("./models/totalentries");
const port = process.env.PORT || 3000;
require("./db/connect");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.get("/",(req,res)=>{
    res.send("index");
});

app.get("/index2",(req,res)=>{
    res.send("index2");
});
app.post("/index2",async (req,res)=>{
    try{
         
        // const password = req.body.password;
        // const cpassword = req.body.confirmpassword;
             const newEntry = new Totalentries({
                    sname : req.body.sname,
                    fname : req.body.fname,
                    mname : req.body.mname,
                    schname : req.body.schname,
                    fage : req.body.fage,
                    selectreason : req.body.selectreason,
                    selectclass : req.body.selectclass,
                    selectgender : req.body.selectgender,
                    selectcategory : req.body.selectcategory,
                    fphone : req.body.fphone,
                    address : req.body.address,
             })

            const added = await newEntry.save();
            console.log(added);
            res.status(201).send("index2");

    }
    catch(error){
        res.status(400).send(error);
        }
})

app.listen(port,()=>{
    console.log("server is running on port 3000");
})