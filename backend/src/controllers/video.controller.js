import Video from '../models/Video.model.js';

// @desc    Create a new video
// @route   POST /api/v1/videos
// @access  Private
export const createVideo = async (req, res) => {
  try {
    // Assuming req.user.id is available from an auth middleware
    const newVideo = await Video.create({ ...req.body, author: req.user.id });
    res.status(201).json({
      status: 'success',
      data: {
        video: newVideo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Get all videos
// @route   GET /api/v1/videos
// @access  Public
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('author', 'name');
    res.status(200).json({
      status: 'success',
      results: videos.length,
      data: {
        videos,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Get a single video by slug
// @route   GET /api/v1/videos/:slug
// @access  Public
export const getVideo = async (req, res) => {
  try {
    const video = await Video.findOne({ slug: req.params.slug }).populate(
      'author',
      'name'
    );
    if (!video) {
      return res.status(404).json({
        status: 'fail',
        message: 'No video found with that slug',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        video,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Update a video
// @route   PATCH /api/v1/videos/:slug
// @access  Private
export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findOneAndUpdate({ slug: req.params.slug }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!video) {
      return res.status(404).json({
        status: 'fail',
        message: 'No video found with that slug',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        video,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Delete a video
// @route   DELETE /api/v1/videos/:slug
// @access  Private
export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findOneAndDelete({ slug: req.params.slug });

    if (!video) {
      return res.status(404).json({
        status: 'fail',
        message: 'No video found with that slug',
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};
