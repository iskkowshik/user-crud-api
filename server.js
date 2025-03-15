const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const path=require('path');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/user');
const app=express();

//Midleware to parse and handle routing
app.use(bodyParser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use('/users', userRoutes);

//DB Conection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
 
 //Server running and listening at PORT 
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});