// Require packages
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const session = require('express-session');
const flash = require('express-flash');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const { port, env, dbURI, sessionSecret } = require('./config/environment');
const errorHandler = require('./lib/errorHandler');
const routes = require('./config/routes');
const customResponses = require('./lib/customResponses');
const authentication = require('./lib/authentication');

// Create an express app
const app = express();

// Set up our template engine
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);

// Set up static files folder
app.use(express.static(`${__dirname}/public`));

// Connect to database
mongoose.connect(dbURI);

// Set up middleware
if(env !== 'test') app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride((req) => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;

    return method;
  }
}));

// Set up sessions
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false
}));

// Flash messages - after sessions
app.use(flash());

// Custom middleware - after app and flash, before routes
app.use(customResponses);
app.use(authentication);

// Before error handler
app.use(routes);

// Last piece of middleware - before port
app.use(errorHandler);

app.listen(port, () => console.log(`Express is listening to port ${port}`));
