const app = require('express')();


app.get('/', (req, res) => {
    res.send('Test API');
});


app.listen(3000, () => {
    console.log('Server is running at port 3000');
})