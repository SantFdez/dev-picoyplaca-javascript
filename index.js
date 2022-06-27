import express from 'express';
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
    console.log(`Server working on ${port} port`)
})