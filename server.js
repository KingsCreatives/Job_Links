const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000;



// set up server
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db set
let db,
    dbConnectionStr = 'mongodb+srv://kwamecody:1234@cluster0.t4d35ct.mongodb.net/?retryWrites=true&w=majority',
    dbName = 'joblinks';

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`);
        db = client.db(dbName);
    });





// port
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});