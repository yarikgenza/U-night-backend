import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import morgan from 'morgan';
import { database } from 'config';

import {
  registerRoutes,
  registerMiddlewares,
} from './makers/express';

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

registerRoutes(app);
registerMiddlewares(app);

export default app;
