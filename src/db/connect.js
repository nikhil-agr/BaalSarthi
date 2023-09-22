const mongoose = require("mongoose");
// const district1db = mongoose.createConnection("mongodb://127.0.0.1:27017/District1", {
//     // useNewUrlParser : true,
//     // useUnifiedTopology : true,
//     // useCreateIndex:true,
//     // useFindAndModfiy : false
// })

// const district2db = mongoose.createConnection("mongodb://127.0.0.1:27017/District2", {
// });

// const credentialsDb = mongoose.createConnection("mongodb://127.0.0.1:27017/Credentials", {
// });
// district1db.on('open', () => {
//     console.log('Connection to Database 1 is successful');
// });

// district2db.on('open', () => {
//     console.log('Connection to Database 2 is successful');
// });

// // Listen for the "error" event to handle connection errors
// district1db.on('error', (err) => {
//     console.error('Connection to Database 1 failed:', err);
// });

// district2db.on('error', (err) => {
//     console.error('Connection to Database 2 failed:', err);
// });

// credentialsDb.on('open', () => {
//     console.log('Connection to Database credentials is successful');
// });

// credentialsDb.on('error', (err) => {
//     console.error('Connection to Database credentials failed:', err);
// });

mongoose.connect("mongodb://127.0.0.1:27017/Credentials",{

}).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log(e);
})
