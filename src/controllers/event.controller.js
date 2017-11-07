import models from '../models';

const { Event } = models;

/**
 * @name Select
 * @description Sends a list of events to client;
 */
export const select = async (req, res, next) => {
  let events;

  try {
    events = await Event.find().lean();
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.json(events);
};


/**
 * @name Insert
 * @description Creates an event and sends it to client
 * @param {Object} body
 */
export const insert = async (req, res, next) => {
  const { body } = req;
  let event;

  try {
    event = await Event.create(body);
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.json(event);
};


/**
 * @name SelectOne
 * @description Finds an event and sends it to client
 * @param {ObjectID} _id
 */
export const selectOne = async (req, res, next) => {
  const { _id } = req.params;
  let event;

  try {
    event = await Event.findOne({ _id }).lean();
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.json(event);
};


/**
 * @name Update
 * @description Updates an event and sends updated doc to client
 * @param {ObjectID} _id
 * @param {Object} body
 */
export const update = async (req, res, next) => {
  const { _id } = req.params;
  const { body } = req;
  let event;

  try {
    event = await Event.findOneAndUpdate({ _id }, body, { new: true });
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.json(event);
};

/**
 * @name Remove
 * @description Deletes an event. Sends nothing but status
 * @param {ObjectID} _id
 */
export const remove = async (req, res, next) => {
  const { _id } = req.params;

  try {
    await Event.remove({ _id }).exec();
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.sendStatus(204);
};
