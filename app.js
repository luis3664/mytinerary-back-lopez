import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import './database.js'

import indexRouter from './routes/index.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', indexRouter);
app.use('/', (req, res, next) => {
  res.send('Welcome the API to Mytinerary.')
});

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(process.env['PORT'], () => console.log('Server ready on port: ' + process.env['PORT']));
