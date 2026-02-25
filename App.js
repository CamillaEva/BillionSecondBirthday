const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontpage.html');
});


app.listen(8080, () => {
    console.log('server is running on port ', 8080);
});