const express = require('express');
const app = express()
const port = 4000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    //response.status(200).send
    res.render('index');
});

const server = app.listen(port, () => {
 console.log(`Cart app listening at http://localhost:${port}`);
});


//app.use(express.static(path.join(__dirname, '../www')));