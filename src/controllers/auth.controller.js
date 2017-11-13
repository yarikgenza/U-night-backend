/**
 * @name Auth
 * @description Does nothing but sends a status. Other work is done by passport.js
 */
const auth = async (req, res) => {
  res.sendStatus(req.user ? 200 : 401);
};

export default auth;
