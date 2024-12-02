const express = require('express'); // call express for our project
const exphbs = require('express-handlebars')
const app = express(); // call express to create a server for the project
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser'); // In order to be able to retrieve the request body

const PORT = 3000; // start the server on a port

// make express listen to the port
app.listen(PORT, function () {
    console.log(`Express is running at the door ${PORT}.`);
});

// Declare that body-parsey will be used in 'Express'
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
// Html in handlebars format
app.set('views', path.join(__dirname, 'views',));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' })); // Part that is repeated most in the application. Main Application Layout File
app.set('view engine', 'handlebars'); // Framework or Library that will be used to render the 'views'

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// db connection
// Database connection, which will perform the test whenever the application is started or when there is a transaction in the database, we will need to go through this connection.
db
    .authenticate()
    .then(() => {
        console.log("Database connection successful.");
    })
    .catch(err => {
        console.log("An error occurred while connecting to the database.", err);
    });

// route main
app.get('/', (require, response) => {
    response.render('index');
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));