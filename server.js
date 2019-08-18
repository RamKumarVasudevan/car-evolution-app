const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')


// create express app
const app = express();
app.use(cors())


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

// define a simple route


app.get('/getYear', (req, res) => {
  availableYears=[1800,1850,1900,1950,2000] //choose one from list

    res.json({"year": 2000});
});

// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
