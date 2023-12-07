const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const shopRoutes = require('./Routes/shop');
const adminRoutes = require('./Routes/admin');
const contactRoutes = require('./Routes/contact');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));



app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);



app.use('/',errorController.get404);


app.listen(4000);