import { Schema } from 'mongoose';

const modelName = 'Club';

module.exports = (mongoose) => {
  const schema = new Schema({
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    photosUrl: [{
      type: String,
    }],
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    ratingCounter: {
      type: Number,
      default: 0,
    },
    siteUrl: {
      type: String,
    },
  }, {
    timestamps: true,
  });

  return mongoose.model(modelName, schema);
};
