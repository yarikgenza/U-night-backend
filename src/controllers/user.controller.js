import models from '../models';

const { User } = models;

/**
 * @name Select
 * @description Sends a list of users to client; TO-DO: make it available for admin only
 */
export const select = async (req, res, next) => {
  let users;

  try {
    users = await User.find().lean();
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.json(users);
};

/**
 * @name SelectOne
 * @description Finds an user by id and sends it to client
 * @param {ObjectID} _id
 */
export const selectOne = async (req, res, next) => {
  const { _id } = req.params;
  let user;

  try {
    user = await User.findOne({ _id }).lean();
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.json(user);
};


/**
 * @name Update
 * @description Updates user and sends updated doc to client
 * @param {ObjectID} _id
 * @param {Object} body
 */
export const update = async (req, res, next) => {
  const { _id } = req.params;
  const { body } = req;
  let user;

  try {
    user = await User.findOneAndUpdate({ _id }, body, { new: true });
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.json(user);
};

/**
 * @name Remove
 * @description Deletes a user. Sends nothing but status
 * @param {ObjectID} _id
 */
export const remove = async (req, res, next) => {
  const { _id } = req.params;

  try {
    await User.remove({ _id }).exec();
  } catch ({ message }) {
    return next({
      message,
    });
  }

  res.sendStatus(204);
};
