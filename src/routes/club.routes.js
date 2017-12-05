import { Router } from 'express';
import * as clubController from '../controllers/club.controller';

const router = new Router();

router.get('/clubs', clubController.select);
router.get('/clubs/:_id', clubController.selectOne);
router.post('/clubs', clubController.insert);
router.patch('/clubs/:_id', clubController.update);
router.delete('/clubs/:_id', clubController.remove);

export default router;
