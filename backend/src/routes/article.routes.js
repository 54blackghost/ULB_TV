import express from 'express';
import {
  createArticle,
  getAllArticles,
  getArticle,
  updateArticle,
  deleteArticle,
} from '../controllers/article.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { restrictTo } from '../middlewares/role.middleware.js';

const router = express.Router();

router
  .route('/')
  .get(getAllArticles)
  .post(protect, createArticle); // Only logged-in users can create articles

router
  .route('/:slug')
  .get(getArticle)
  .patch(protect, updateArticle) // Only logged-in users can update their articles (further logic needed in controller)
  .delete(protect, restrictTo('admin'), deleteArticle); // Only admins can delete articles

export default router;
