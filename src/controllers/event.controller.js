import { Event } from '../models';

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

export const update = async (req, res, next) => {
  const { _id } = req.params;
  const { body } = req;

  try {
    await Event.update({ _id }, {
      ...body,
    });
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.status(204);
};

export const remove = async (req, res, next) => {
  const { _id } = req.params;

  try {
    await Event.remove({ _id }).exec();
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res
    .status(204);
};
