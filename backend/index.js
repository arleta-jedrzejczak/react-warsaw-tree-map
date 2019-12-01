const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const URL = 'https://api.um.warszawa.pl/api/action/datastore_search/?resource_id=ed6217dd-c8d0-4f7b-8bed-3b7eb81a95ba&limit=500';

const app = express();
app.use(cors());

app.get('/test.json', (req, browserRes) => 
    fetch(URL)
        .then(apiRes => apiRes.json())
        .then(apiRes => browserRes.json(apiRes)));

app.listen(4000);
