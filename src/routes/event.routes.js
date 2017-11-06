import { Router } from 'express';
import * as eventController from '../controllers/event.controller';

const router = Router();

router.get('/events', eventController.select);
router.get('/events/:_id', eventController.selectOne);
router.post('/events', eventController.insert);
router.patch('/events/:_id', eventController.update);
router.delete('/events/:_id', eventController.remove);

export default router;
