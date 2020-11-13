const mongoose = require('mongoose');

const uri = "mongodb://localhost/bookstore_database";

const mongoConnect = () => {
    mongoose.connect(uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    let conn = mongoose.connection;
    conn.once('open',()=> console.log("Connected to DB!"));
    conn.on('error', ()=> console.log("Faild to connect to DB!"));
}

module.exports = mongoConnect;