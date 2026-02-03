import express from 'express';
import {
  createPodcast,
  getAllPodcasts,
  getPodcast,
  getAllPodcastsAdmin,
  getPodcastByIdAdmin,
  updatePodcastAdmin,
  deletePodcastAdmin,
} from '../controllers/podcast.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { restrictTo } from '../middlewares/role.middleware.js';

const router = express.Router();

// Public routes
router.route('/').get(getAllPodcasts);
router.route('/:slug').get(getPodcast);

// Admin-specific routes
// All routes below this middleware will be protected and restricted to 'admin'
router.use(protect, restrictTo('admin'));

router
  .route('/')
  .post(createPodcast); // Only admins can create podcasts

router
  .route('/admin')
  .get(getAllPodcastsAdmin); // Get all podcasts for admin view

router
  .route('/admin/:id')
  .get(getPodcastByIdAdmin) // Get a single podcast by ID for admin view
  .patch(updatePodcastAdmin) // Update a podcast by ID (Admin)
  .delete(deletePodcastAdmin); // Delete a podcast by ID (Admin)

export default router;
