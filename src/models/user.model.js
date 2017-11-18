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
  nightCounter: {
    type: Number,
    default: 0,
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
  facebookId: {
    type: String,
  },
}, {
  timestamps: true,
});

export default mongoose.model(modelName, schema);
