import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import morgan from 'morgan';
import { database } from 'config';

import errorHandler from './middlewares/errorHandler';
const app = express();

mongoose.connect(database, {
  useMongoClient: true,
  promiseLibrary: bluebird,
}, () => {
  console.log(`Connected to db: ${database}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'hello' });
});

app.use(errorHandler);

export default app;
