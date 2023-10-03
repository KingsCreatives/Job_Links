const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000;
// const cors = require('cors');



// set up server
app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(cors())
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

// home
app.get('/',(request, response)=>{
    db.collection('joblink').find().toArray()
    .then(data => {
        response.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))
})

// profile
app.get('/profile',(request, response)=>{
    db.collection('joblink').find().toArray()
    .then(data => {
        response.render('profile.ejs', { info: data })
    })
    .catch(error => console.error(error))
})



// port
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
