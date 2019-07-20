// SECTION GLOBAL VARIABLES
const express = require('express');
const app = express();
const PORT = 3000;

// SECTION MIDDLEWARE
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// SECTION HTML ENDPOINTS
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});


app.post('/', (req, res) => {
    
});


// SECTION ROUTES



// SECTION SERVER LISTNER
app.listen(PORT, () => {
    console.log(`NOW CONNECTED TO PORT ${PORT}`);
});