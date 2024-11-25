const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Route test
router.get('/test', (require, response) => {
    response.send("Testing...");
});

// Add a JOB via POST
router.post('/add', (request, response) => {
    // Request body
    let {
        title,
        description,
        salary,
        company,
        email,
        new_job
    } = request.body;

    // Insert data into the application
    // All parameters described in the model must be passed.
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    }).then(() => response.redirect('/'))
        .catch(err => console.log(err));
});

module.exports = router;