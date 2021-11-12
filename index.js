const express= require('express');
const logger= require('morgan');
const cors = require('cors');
const cookieParser= require('cookie-parser');
const app= express();

const port= 8000;
const expressLayouts= require('express-ejs-layouts');
//used for session cookie
const session= require('express-session');
//here we use mongo store to store session cookie b'coz don't want to remove session cookie at every server restart ;)
const MongoStore= require('connect-mongo')(session);
const sassMiddleware= require('node-sass-middleware');
//for flash notification
const flash= require('connect-flash'); 

const path= require('path');

//express functions
app.use(express.urlencoded({
    extended: false
  }));



app.use(cors());
app.use(cookieParser());
//make the uploads path available to the browser

app.use(expressLayouts);


//extract scripts and styles from subpages to the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express router
app.use('/',require("./routes/index.js"));
//setting up server
app.listen(port,function(err){
    if(err){
        console.log('something wrong in starting server !!!');
        return;
    }
     return console.log("server is up and running on port ",port);
});