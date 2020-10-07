const express = require('express');
const nocache = require('nocache');
const bodyParser = require('body-parser');

const app = express();

const PORT = 5000;

// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(nocache());
app.use(bodyParser.json());

const CLIENT_ID = "976385954028-ogd3cfn4d30o3abo1gcistr8h2m5eqch.apps.googleusercontent.com";
const CLIENT_SECRET = "tRVqgjJcwtgYAHRXlYLJIpZe";
const API_KEY = "AIzaSyCdNvp4IJYt27k3Oq_q-Wv44iBFz4fQ45A";

//To start the server
app.listen(PORT, () => {
    console.log(`OAuth 2.0 Demo Started On ${PORT}`);
});

//Loading the login page
app.get('/', (req, res) => {
    res.sendFile('Frontend/View.html', {root: __dirname});
});
