const mongoose = require('mongoose');

//Set up mongoose, a library for mongoDB, our database and configure Mongo Connection
//Connection Library
const dbName ="product_manager";
mongoose.connect("mongodb://localhost/"+dbName,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log(`You are now connected to ${dbName} database`);
}).catch((err)=>{
    console.log(`Problem connecting with ${dbName}`); 
    console.log(err);
});
