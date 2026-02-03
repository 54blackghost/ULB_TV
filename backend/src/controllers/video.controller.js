import Video from '../models/Video.model.js';
import slugify from '../utils/slugify.js'; // Assuming slugify is available

// @desc    Create a new video
// @route   POST /api/v1/videos
// @access  Private (Admin)
export const createVideo = async (req, res) => {
  try {
    const { title, description, duration, videoUrl, thumbnail } = req.body;
    const newSlug = slugify(title);

    const newVideo = await Video.create({
      title,
      description,
      duration,
      videoUrl,
      thumbnail,
      slug: newSlug,
      author: req.user.id, // Assuming req.user.id is available from an auth middleware
    });
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

// @desc    Get all videos for public view
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

// @desc    Get a single video by slug for public view
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

// @desc    Get all videos for admin view
// @route   GET /api/v1/videos/admin
// @access  Private (Admin)
export const getAllVideosAdmin = async (req, res) => {
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

// @desc    Get a single video by ID for admin view
// @route   GET /api/v1/videos/admin/:id
// @access  Private (Admin)
export const getVideoByIdAdmin = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate(
      'author',
      'name'
    );
    if (!video) {
      return res.status(404).json({
        status: 'fail',
        message: 'No video found with that ID',
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

// @desc    Update a video by ID (Admin)
// @route   PATCH /api/v1/videos/admin/:id
// @access  Private (Admin)
export const updateVideoAdmin = async (req, res) => {
  try {
    const { title, description, duration, videoUrl, thumbnail } = req.body;
    const updateFields: any = { description, duration, videoUrl, thumbnail }; // Use 'any' type temporarily
    if (title) {
      updateFields.title = title;
      updateFields.slug = slugify(title);
    }
    const video = await Video.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!video) {
      return res.status(404).json({
        status: 'fail',
        message: 'No video found with that ID',
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

// @desc    Delete a video by ID (Admin)
// @route   DELETE /api/v1/videos/admin/:id
// @access  Private (Admin)
export const deleteVideoAdmin = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);

    if (!video) {
      return res.status(404).json({
        status: 'fail',
        message: 'No video found with that ID',
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
