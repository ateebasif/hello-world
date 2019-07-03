let express = require('express');
let app = express();
let port = process.env.Port || 3000;

app.get('/', function(req,res){
    res.sendFile(__dirname + '/form.html');
});

app.listen(port, () => { console.log(`Listening to port ${port}`) });