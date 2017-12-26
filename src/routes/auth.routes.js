import { Router } from 'express';
import auth from '../controllers/auth.controller';

const router = Router();

export default (passport) => {
  router.get('/facebook', passport.authenticate('facebook-token'), auth);
  return router;
};
