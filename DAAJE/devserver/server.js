// BASE SERVER SETUP
// =============================================================================

const express    = require('express');        
const app        = express();                 
const bodyParser = require('body-parser');
const router     = require('./routes/routes');
const cors       = require('cors');
const proxy      = require('express-http-proxy')


// all static served content declared here

app.use(express.static('public'));

// Proxy definition
//app.use('/', proxy('http://127.0.0.1:5173/'));

//  Allow for CORS. Use cors() as middleware to allow for cors on single routes.
const corsOptions = {
    origin: 'http://127.0.0.1:5173',
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions));


//parsing for middleware functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// all of our routes will be prefixed with '/'
app.use('/', router);

// <===== Export the ready server =====>

module.exports = app;