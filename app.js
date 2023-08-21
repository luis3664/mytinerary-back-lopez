import 'dotenv/config.js';
import express from 'express';
import createError from 'http-errors';
import cors from 'cors';
import './database.js'

import indexRouter from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', indexRouter);
app.use('/', (req, res, next) => {
  res.send('Welcome the API to Mytinerary.')
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, 'Error route not found'));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env['PORT'], () => console.log('Server ready on port: ' + process.env['PORT']));
