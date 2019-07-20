// SECTION GLOBAL VARIABLES
const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db/dogs.json')

// SECTION MIDDLEWARE
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// SECTION HTML ENDPOINTS
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

// NOTE TEST DATA





// SECTION ROUTES
app.get('/api/v1/dogs', (req, res) => {
   res.status(200).json({
       status: 200,
       data: db.dogs
   })
});


app.post('/', (req, res) => {
    
});

app.patch('/', (req, res) => {
    
});


// SECTION SERVER LISTNER
app.listen(PORT, () => {
    console.log(`NOW CONNECTED TO PORT ${PORT}`);
});