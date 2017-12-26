import { Schema } from 'mongoose';

const modelName = 'Event';

module.exports = (mongoose) => {
  const schema = new Schema({
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Club',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      male: Number,
      female: Number,
    },
    startAt: {
      type: Date,
      required: true,
    },
    endAt: {
      type: Date,
    },
    photoUrl: {
      type: String,
    },
  }, {
    timestamps: true,
  });

  return mongoose.model(modelName, schema);
};
