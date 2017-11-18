/* eslint-disable */
import mongoose from 'mongoose';
import bluebird from 'bluebird';

import { database } from '../config';

mongoose.connect(database, {
  useMongoClient: true,
}, () => {
  console.log(`Connected to db: ${database}`);
});
mongoose.Promise = bluebird;

const User = require('../src/models/user.model')(mongoose);

const data = {
  email: 'admin@unight.com',
  firstName: 'admin',
  facebookId: '1234567890',
};


exports.up = async (next) => {
  try {
    await User.create(data);
    console.log('001 - Created initial user');
    next();
  } catch (error) {
    throw error;
  }
};

exports.down = (next) => {
  next();
};
