const express = require('express');
const hbs = require('express-handlebars');
const cors = require('cors');
const dbConection = require('./mongoDb/connection');
const { router } = require('./controlers/router');

start();
function start () {
    const app = express();
    app.use(cors({
        // 'Acces-Control-Allow-Origin': ['*'],
        // 'Acces-Control-Allow-Methods': ['GET', 'POST', 'EDIT', 'DELETE'],
        // 'Access-Control-Allow-Headers': ['Authorization', 'X-Authorization', 'Content-Type']
    }));
    app.use(express.json());
    
    app.use(express.urlencoded({extended: true}));
    app.engine('hbs', hbs.engine({
        extname: 'hbs'
    }));
    
    app.set('view engine', 'hbs');
    app.set('/views', 'views');
    
    app.use(router);

    try {
        app.listen(3000, () => {
            console.log("Server listen on port 3000");
        });
        dbConection();
    }catch (err) {
        alert('Couldn\'t connect to MongoDb');
    }
    
}