/* eslint-disable */
import moment from 'moment';
import mongoose from 'mongoose';
import bluebird from 'bluebird';

import { database } from '../config';

mongoose.connect(database, {
  useMongoClient: true,
}, () => {
  console.log(`Connected to db: ${database}`);
});
mongoose.Promise = bluebird;

const Event = require('../src/models/event.model')(mongoose);

const data = {
  name: 'init event',
  description: 'Init event description',
  price: {
    male: 50,
    female: 30,
  },
  startAt: moment().add(1, 'd'),
  endAt: moment().add(2, 'd'),
  photoUrl: 'http://fakeimg.pl/300/',
};

exports.up = async (next) => {
  try {
    await Event.create(data);
    console.log('002 - Created initial event');
    next();
  } catch (error) {
    throw error;
  }
};

exports.down = (next) => {
  next();
};
