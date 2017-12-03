import { Router } from 'express';
import * as ClubController from '../controllers/club.controller';

const router = new Router();

router.get('/clubs', ClubController.select);
router.get('/clubs/:_id', ClubController.selectOne);
router.post('/clubs', ClubController.insert);
router.patch('/clubs/:_id', ClubController.update);
router.delete('/clubs/:_id', ClubController.remove);

export default router;