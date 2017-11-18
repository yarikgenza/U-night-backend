import FacebookTokenStrategy from 'passport-facebook-token';

import User from '../models/user.model';
import config from '../../config';

const { facebook } = config;

const registerPassport = (app, passport) => {
  passport.use(new FacebookTokenStrategy({
    clientID: facebook.clientID,
    clientSecret: facebook.clientSecret,
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ facebookId: profile._json.id });
      if (!user) {
        try {
          user = await User.create({
            firstName: profile._json.first_name,
            lastName: profile._json.last_name,
            email: profile._json.email,
            facebookId: profile._json.id,
          });
          return done(user);
        } catch (error) {
          return done(error);
        }
      } else {
        return done(user);
      }
    } catch (error) {
      return done(error);
    }
  }));

  app.use(passport.initialize());
};

export default registerPassport;
