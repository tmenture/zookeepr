const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express(); 


// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Middleware that instructs the server to make certain files readily available
app.use(express.static('public'));

// Pare incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});