const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dropoutSchema = new mongoose.Schema({

    sname : {
        type : String,
        required : true,
    },
    fname : {
        type : String,
        required : true,
    },
    mname : {
        type : String,
        required : true,
    },
    schname : {
        type : String,
        required : true,
    },
    fage:{
        type : Number,
        required : true
    },
    fphone:{
        type : Number,
        required : true,
        unique:true
    },
    selectreason:{
        type : String,
        required : true,
    },
    selectgender:{
        type : String,
        required : true,
    },
    selectclass:{
        type : String,
        required : true,
    },
    selectcategory:{
        type : String,
        required : true,
    },
    address:{
        type : String,
        required : true,
    },
    block:{
        type : String,
        required : true,
    },
    district:{
        type : String,
        required : true,
    },
    rollno:{
        type : Number,
        required : true,
        unique: true
    },
});

const School1 = new mongoose.model("School1",dropoutSchema);
module.exports = School1;

// const School2 = new mongoose.model("School2",dropoutSchema);
// module.exports = School2;

// const School3 = new mongoose.model("School3",dropoutSchema);
// module.exports = School3;

// const School4 = new mongoose.model("School4",dropoutSchema);
// module.exports = School4;