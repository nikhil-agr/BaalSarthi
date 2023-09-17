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

app.get("/api/data",async(req,res)=>{
    try {
        const count = await Totalentries.find().countDocuments()
        const count_poverty = await Totalentries.find({selectreason:"Poverty"}).countDocuments()
        const count_childMarriage= await Totalentries.find({selectreason:"child marriage"}).countDocuments()
        const count_healthIssue= await Totalentries.find({selectreason:"health_issues"}).countDocuments()
        const count_Bullying = await Totalentries.find({selectreason:"bullying"}).countDocuments()
        const count_FemaleChild = await Totalentries.find({selectreason:"Girl_child"}).countDocuments()
        const count_lackInterest = await Totalentries.find({selectreason:"lack of interest"}).countDocuments()
        const count_boys = await Totalentries.find({selectgender:"male"}).countDocuments()
        const count_girls = await Totalentries.find({selectgender:"female"}).countDocuments()
        const data = {
            pieChartLabels: ['poverty', 'childMarriage', 'healthIssue','Bullying','FemaleChild','Lack OF Interest'],
            pieChartData: [count_poverty,count_childMarriage,count_healthIssue,count_Bullying,count_FemaleChild,count_lackInterest],
            pieChartColors: ['#EBE4D1','#26577C','#E55604','#FFCC70','#FFB000','green'],
            total: count,
            boys : count_boys, 
            girls: count_girls
          };
        //   console.log(Totalentries.countDocuments({selectreason:"Poverty"}));
    
        //   res.json(pieChartData);
          res.json(data);
        console.log(count_FemaleChild);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
});

app.listen(port,()=>{
    console.log("server is running on port 3000");
})
