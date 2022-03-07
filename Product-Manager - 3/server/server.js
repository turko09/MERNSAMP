//npm init -y
// npm i express mongoose
//nodemon server.jsnmn
//import dependencies

const express= require("express");
const app = express();
const cors = require("cors");

//midLeware/Configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
    
require("./config/mongoose.config");
require("./routes/product.route")(app);

//ourcalls
const portNumber=8000;
app.listen(8000,()=>console.log(`Successfully connected to port ${portNumber}`));