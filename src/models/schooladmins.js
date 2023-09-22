const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const dropoutSchema = new mongoose.Schema({

//     sname : {
//         type : String,
//         required : true,
//     },
//     fname : {
//         type : String,
//         required : true,
//     },
//     mname : {
//         type : String,
//         required : true,
//     },
//     schname : {
//         type : String,
//         required : true,
//     },
//     fage:{
//         type : Number,
//         required : true
//     },
//     fphone:{
//         type : Number,
//         required : true,
//         unique:true
//     },
//     selectreason:{
//         type : String,
//         required : true,
//     },
//     selectgender:{
//         type : String,
//         required : true,
//     },
//     selectclass:{
//         type : String,
//         required : true,
//     },
//     selectcategory:{
//         type : String,
//         required : true,
//     },
//     address:{
//         type : String,
//         required : true,
//     },
//     block:{
//         type : String,
//         required : true,
//     },
//     district:{
//         type : String,
//         required : true,
//     },
//     rollno:{
//         type : Number,
//         required : true,
//         unique: true
//     },
// });

const  credentialsSchema = new mongoose.Schema({

    userID : {
        type : String,
        required : true,
        unique: true
    },

    password : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    type : {
        type : String,
        required : true,
    },
    DistrictName : {
        type : String,
        required : true,
    },
    BlockName : {
        type : String,
        required : true,
    },
    designation : {
        type : String,
        required : true,
    },
    schoolName : {
        type : String,
        required : true,
    },
    schoolId : {
        type : String,
        required : true,
        unique: true
    },
    // tokens:[{
    //     token : {
    //         type:String,
    //         required : true
    //     }
    // }]

});

// credentialsSchema.methods.generateAuth = async ()=>{
//     try {
//         console.log(this._id);
//         const token = jwt.sign({_id: this._id.toString()},"abcdefghijklmnopqrstuvwxyz12345678");
//         // this.tokens = this.tokens.concat({token:token});
//         // await this.save();
//         console.log(token);
//         return token;
//     } catch (error) {
//         res.send("the error part is " + error);
//         console.log("the error part is " + error);
//     }
// }

// now we need to create a collection

// const School1 = new mongoose.model("School1",dropoutSchema);
// module.exports = School1;

// const School2 = new mongoose.model("School2",dropoutSchema);
// module.exports = School2;

// const School3 = new mongoose.model("School3",dropoutSchema);
// module.exports = School3;

// const School4 = new mongoose.model("School4",dropoutSchema);
// module.exports = School4;

const Deos = new mongoose.model("Deos",credentialsSchema);
module.exports = Deos;

const Schooladmins = new mongoose.model("Schooladmins",credentialsSchema);
module.exports = Schooladmins;
