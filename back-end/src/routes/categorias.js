import { Router } from 'express';
import controller from '../controllers/categorias.js';  // Adjust import based on path

const router = Router();

// POST request to create a new category
router.post('/', controller.create);

export default router;
