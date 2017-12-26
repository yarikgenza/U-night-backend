import { Schema } from 'mongoose';

const modelName = 'User';

module.exports = (mongoose) => {
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

  return mongoose.model(modelName, schema);
};
