const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const shopRoutes = require('./Routes/shop');
const adminRoutes = require('./Routes/admin');
const contactRoutes = require('./Routes/contact');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));



app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);



app.use('/',(req, res, next) =>{
    res.status(401).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(4000);