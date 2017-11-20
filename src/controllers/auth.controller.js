/**
 * @name Auth
 * @description Does nothing but sends a status. Other work is done by passport.js
 */
const auth = async (user, req, res, next) => {
  res.sendStatus(user.id ? 200 : 401);
  next();
};

export default auth;
