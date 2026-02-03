import express from 'express';
import {
  createVideo,
  getAllVideos,
  getVideo,
  getAllVideosAdmin,
  getVideoByIdAdmin,
  updateVideoAdmin,
  deleteVideoAdmin,
} from '../controllers/video.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { restrictTo } from '../middlewares/role.middleware.js';

const router = express.Router();

// Public routes
router.route('/').get(getAllVideos);
router.route('/:slug').get(getVideo);

// Admin-specific routes
// All routes below this middleware will be protected and restricted to 'admin'
router.use(protect, restrictTo('admin'));

router
  .route('/')
  .post(createVideo); // Only admins can create videos

router
  .route('/admin')
  .get(getAllVideosAdmin); // Get all videos for admin view

router
  .route('/admin/:id')
  .get(getVideoByIdAdmin) // Get a single video by ID for admin view
  .patch(updateVideoAdmin) // Update a video by ID (Admin)
  .delete(deleteVideoAdmin); // Delete a video by ID (Admin)

export default router;
