import passport from 'passport';
import FacebookTokenStrategy from 'passport-facebook-token';

import User from '../models/user.model';
import config from '../../config';

const { facebook } = config;

// Facebook-token-strategy
passport.use(new FacebookTokenStrategy({
  clientID: facebook.clientID,
  clientSecret: facebook.clientSecret,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ facebookId: profile.id });
    if (!user) {
      try {
        user = await User.create({
          firstName: profile.first_name,
          lastName: profile.last_name,
          email: profile.emails[0].value,
          gender: profile.genged,
          nickname: profile.username,
          facebookId: profile.id,
        });
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    } else {
      return done(null, user);
    }
  } catch (error) {
    return done(error);
  }
}));

const registerPassport = (app) => {
  app.use(passport.initialize());
};

export default registerPassport;
