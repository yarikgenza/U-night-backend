import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

export default () => { // use passport later
  router.get('/users', userController.select);
  router.get('/users/:_id', userController.selectOne);
  router.patch('/users/:_id', userController.update);
  router.delete('/users/:_id', userController.remove);

  return router;
};

