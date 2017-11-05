import { Router } from 'express';
import { eventController } from '../controllers';

const router = Router();

router.get('/events', eventController.select);
router.get('/events/:_id', eventController.selectOne);
router.post('/events', eventController.create);
router.patch('/events/:_id', eventController.update);
router.delete('/task/:id', eventController.remove);

export default router;
