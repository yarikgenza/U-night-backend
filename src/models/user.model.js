import mongoose, { Schema } from 'mongoose';

const modelName = 'User';

const schema = new Schema({
  email: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  nickname: {
    type: String,
  },
  nightCounter: {
    type: Number,
    default: 0,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  isUnighter: {
    type: Boolean,
    default: false,
  },
  photoUrl: {
    type: String,
  },
  visitedEvents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  }],
}, {
  timestamps: true,
});

export default mongoose.mode(modelName, schema);
