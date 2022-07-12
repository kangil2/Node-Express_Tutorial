const express = require('express');
const app = express();
const bodyparer = require('body-parser');
app.use(bodyparer.json());
app.use(bodyparer.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log("start express server on port 3000")
})
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/main.html")
});
app.get('/main', (req, res) => {
    res.sendFile(__dirname + "/public/main.html")
});

app.post('/email_post', (req, res) => {
    console.log(req.body.email)
    // res.send("<h1>welcome"+ "</br>" + req.body.email + "</h1>")
    res.render('email.ejs', {'email' : req.body.email})
});

app.post('/ajax_send_email', (req,res) => {
    console.log(req.body.email)
    let responseData = {'result': 'ok', 'email': req.body.email};
    res.json(responseData)
})