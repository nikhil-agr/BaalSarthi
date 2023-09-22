const jwt = require("jsonwebtoken");
const Schooladmins = require("../src/models/schooladmins");

const auth = async(req,res,next)=>{
    try {
        
        const token= req.cookies.jwt;

        const collectionName = token;
        // const user = await collectionName.findOne({name:"abbc"});
        console.log(collectionName);
        next();

    } catch (error) {
        res.status(401).send(error);
    }
}

module.exports = auth;