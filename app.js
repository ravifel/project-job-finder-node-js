const express = require('express'); // call express for our project
const app = express(); // call express to create a server for the project
const db = require('./db/connection');
const bodyParser = require('body-parser'); // In order to be able to retrieve the request body

const PORT = 3000; // start the server on a port

// make express listen to the port
app.listen(PORT, function () {
    console.log(`Express is running at the door ${PORT}.`);
});

// Declare that body-parsey will be used in 'Express'
app.use(bodyParser.urlencoded({ extended: false }));

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
    response.send("It's working...");
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));