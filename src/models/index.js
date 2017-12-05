import mongoose from 'mongoose';

const Event = require('./event.model')(mongoose);
const User = require('./user.model')(mongoose);
const Club = require('./club.model')(mongoose);

export default {
  Event,
  User,
  Club,
};
