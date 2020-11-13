const express = require('express');
const app = express();
const bodyPraser = require('body-parser');
const PORT = process.env.PORT || 3000;

//get the connection;
const mongoConnect = require('./services/mongodb_connect');
mongoConnect();

//use body parser
app.use(bodyPraser.urlencoded({extended: true}));

// let your app read json
app.use(express.json());

//import and use bookmark routes
const BookstoreRoutes = require('./routes/BookstoreRoutes');
app.use('/api/bookstore', BookstoreRoutes);


//listens on port 3000
app.listen(PORT, ()=> console.log(`listening on port ${PORT}!`));