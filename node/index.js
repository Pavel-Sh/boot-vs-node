const express = require('express');

const testRoute = require('./src/route/test');

const app = express();

app.use('/api/test', testRoute);

app.listen(8080, () => console.log('server is up'));