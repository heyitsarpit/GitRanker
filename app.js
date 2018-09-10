const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

var app = express();

app.use(bodyParser.json());



app.listen(port, () => {
    console.log(`Server up on port ${port}.`);
});
module.exports = {
    app
};