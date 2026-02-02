import express from 'express';
import {
  createPodcast,
  getAllPodcasts,
  getPodcast,
  updatePodcast,
  deletePodcast,
} from '../controllers/podcast.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { restrictTo } from '../middlewares/role.middleware.js';

const router = express.Router();

router
  .route('/')
  .get(getAllPodcasts)
  .post(protect, createPodcast);

router
  .route('/:slug')
  .get(getPodcast)
  .patch(protect, updatePodcast)
  .delete(protect, restrictTo('admin'), deletePodcast);

export default router;
