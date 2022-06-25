const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.listen(() => {
    console.log(`Server working on ${port} port`)
})