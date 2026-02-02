import express from 'express';
import {
  createVideo,
  getAllVideos,
  getVideo,
  updateVideo,
  deleteVideo,
} from '../controllers/video.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { restrictTo } from '../middlewares/role.middleware.js';

const router = express.Router();

router
  .route('/')
  .get(getAllVideos)
  .post(protect, createVideo);

router
  .route('/:slug')
  .get(getVideo)
  .patch(protect, updateVideo)
  .delete(protect, restrictTo('admin'), deleteVideo);

export default router;
