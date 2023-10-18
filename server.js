const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000;
require('dotenv').config()

// set up server
app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db set
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'joblinks';

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`);
        db = client.db(dbName);
    });

// home
app.get('/', async(request, response)=>{
    const data = await db.collection('joblink').find().toArray()
    
    response.render('index.ejs', { info: data })
})

// profile
app.get('/profile', async (request, response)=>{
    const data = await db.collection('joblink').find().toArray()

    response.render('profile.ejs', { info: data })
    
})



// port
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
