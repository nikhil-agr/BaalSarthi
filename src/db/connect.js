const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Dropdata", {
    // useNewUrlParser : true,
    // useUnifiedTopology : true,
    // useCreateIndex:true,
    // useFindAndModfiy : false
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(e);
})
