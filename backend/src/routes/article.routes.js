import express from 'express';
import {
  createArticle,
  getAllArticles,
  getArticle,
  getAllArticlesAdmin,
  getArticleByIdAdmin,
  updateArticleAdmin,
  deleteArticleAdmin,
} from '../controllers/article.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { restrictTo } from '../middlewares/role.middleware.js';

const router = express.Router();

// Public routes
router.route('/').get(getAllArticles);
router.route('/:slug').get(getArticle);

// Admin-specific routes
// All routes below this middleware will be protected and restricted to 'admin'
router.use(protect, restrictTo('admin'));

router
  .route('/')
  .post(createArticle); // Only admins can create articles

router
  .route('/admin')
  .get(getAllArticlesAdmin); // Get all articles for admin view

router
  .route('/admin/:id')
  .get(getArticleByIdAdmin) // Get a single article by ID for admin view
  .patch(updateArticleAdmin) // Update an article by ID (Admin)
  .delete(deleteArticleAdmin); // Delete an article by ID (Admin)

export default router;
