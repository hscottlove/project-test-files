// SECTION GLOBAL VARIABLES
const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');

// SECTION MIDDLEWARE
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// SECTION HTML ENDPOINTS
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

// NOTE TEST DATA
const dogs = JSON.parse(fs.readFileSync(`${__dirname}/db/dogs.json`));


// SECTION ROUTES
app.get('/api/v1/dogs', (req, res) => {
   res.status(200).json({
       status: 200,
       numberDogs: dogs.length,
       data: dogs
   })
});


app.post('/api/v1/dogs', (req, res) => {
    
    const newId = dogs[dogs.length - 1].id + 1;
    const newDog = Object.assign({
        id: newId,
    }, req.body);
    
    tours.push(newDog);

    fs.writeFile(`${__dirname}/db/dogs.json`, JSON.stringify(dogs), err => {
        res.status(201).json({
            status: 201,
            data: {
                dog: newDog
            }
        });
    });
    

    // const newDog = req.body
    // res.status(200).json({
    //     status: 200,
    //     numberDogs: dogs.length,
    //     data: dogs
    // })
});




// SECTION SERVER LISTNER
app.listen(PORT, () => {
    console.log(`NOW CONNECTED TO PORT ${PORT}`);
});