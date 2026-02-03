import Podcast from '../models/Podcast.model.js';
import slugify from '../utils/slugify.js'; // Assuming slugify is available

// @desc    Create a new podcast
// @route   POST /api/v1/podcasts
// @access  Private (Admin)
export const createPodcast = async (req, res) => {
  try {
    const { title, description, duration, audioFile } = req.body;
    const newSlug = slugify(title);

    const newPodcast = await Podcast.create({
      title,
      description,
      duration,
      audioFile,
      slug: newSlug,
      author: req.user.id, // Assuming req.user.id is available from an auth middleware
    });
    res.status(201).json({
      status: 'success',
      data: {
        podcast: newPodcast,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Get all podcasts for public view
// @route   GET /api/v1/podcasts
// @access  Public
export const getAllPodcasts = async (req, res) => {
  try {
    const podcasts = await Podcast.find().populate('author', 'name');
    res.status(200).json({
      status: 'success',
      results: podcasts.length,
      data: {
        podcasts,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Get a single podcast by slug for public view
// @route   GET /api/v1/podcasts/:slug
// @access  Public
export const getPodcast = async (req, res) => {
  try {
    const podcast = await Podcast.findOne({ slug: req.params.slug }).populate(
      'author',
      'name'
    );
    if (!podcast) {
      return res.status(404).json({
        status: 'fail',
        message: 'No podcast found with that slug',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        podcast,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Get all podcasts for admin view
// @route   GET /api/v1/podcasts/admin
// @access  Private (Admin)
export const getAllPodcastsAdmin = async (req, res) => {
  try {
    const podcasts = await Podcast.find().populate('author', 'name');
    res.status(200).json({
      status: 'success',
      results: podcasts.length,
      data: {
        podcasts,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Get a single podcast by ID for admin view
// @route   GET /api/v1/podcasts/admin/:id
// @access  Private (Admin)
export const getPodcastByIdAdmin = async (req, res) => {
  try {
    const podcast = await Podcast.findById(req.params.id).populate(
      'author',
      'name'
    );
    if (!podcast) {
      return res.status(404).json({
        status: 'fail',
        message: 'No podcast found with that ID',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        podcast,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Update a podcast by ID (Admin)
// @route   PATCH /api/v1/podcasts/admin/:id
// @access  Private (Admin)
export const updatePodcastAdmin = async (req, res) => {
  try {
    const { title, description, duration, audioFile } = req.body;
    const updateFields: any = { description, duration, audioFile }; // Use 'any' type temporarily
    if (title) {
      updateFields.title = title;
      updateFields.slug = slugify(title);
    }
    const podcast = await Podcast.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!podcast) {
      return res.status(404).json({
        status: 'fail',
        message: 'No podcast found with that ID',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        podcast,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Delete a podcast by ID (Admin)
// @route   DELETE /api/v1/podcasts/admin/:id
// @access  Private (Admin)
export const deletePodcastAdmin = async (req, res) => {
  try {
    const podcast = await Podcast.findByIdAndDelete(req.params.id);

    if (!podcast) {
      return res.status(404).json({
        status: 'fail',
        message: 'No podcast found with that ID',
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
