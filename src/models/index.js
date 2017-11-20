import mongoose from 'mongoose';

const Event = require('./event.model')(mongoose);
const User = require('./user.model')(mongoose);

export default {
  Event,
  User,
};
