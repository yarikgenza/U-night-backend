import mongoose, { Schema } from 'mongoose';

const modelName = 'Event';

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

export default mongoose.model(modelName, schema);
