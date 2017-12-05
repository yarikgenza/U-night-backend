import models from '../models';

const { Club } = models;

/**
 * @name Select
 * @description Sends a list of clubs to client;
 */
export const select = async (req, res, next) => {
  let clubs;

  try {
    clubs = await Club.find().lean();
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.json(clubs);
};


/**
 * @name Insert
 * @description Creates an club and sends it to client
 * @param {Object} body
 */
export const insert = async (req, res, next) => {
  const { body } = req;
  let club;

  try {
    club = await Club.create(body);
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.json(club);
};


/**
 * @name SelectOne
 * @description Finds a club by id and sends it to client
 * @param {ObjectID} _id
 */
export const selectOne = async (req, res, next) => {
  const { _id } = req.params;
  let club;

  try {
    club = await Club.findOne({ _id }).lean();
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.json(club);
};


/**
 * @name Update
 * @description Updates a club and sends updated doc to client
 * @param {ObjectID} _id
 * @param {Object} body
 */
export const update = async (req, res, next) => {
  const { _id } = req.params;
  const { body } = req;
  let club;

  try {
    club = await Club.findOneAndUpdate({ _id }, body, { new: true });
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.json(club);
};

/**
 * @name Remove
 * @description Deletes a club. Sends nothing but status
 * @param {ObjectID} _id
 */
export const remove = async (req, res, next) => {
  const { _id } = req.params;

  try {
    await Club.remove({ _id }).exec();
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.sendStatus(204);
};
