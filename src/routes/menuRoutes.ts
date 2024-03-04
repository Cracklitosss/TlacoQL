import express from 'express';
import { getMenuItems, createMenuItem } from '../controllers/menuController';

const router = express.Router();

router.get('/menu', getMenuItems);
router.post('/menu', createMenuItem);

export default router;