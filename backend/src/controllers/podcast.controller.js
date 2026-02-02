import Podcast from '../models/Podcast.model.js';

// @desc    Create a new podcast
// @route   POST /api/v1/podcasts
// @access  Private
export const createPodcast = async (req, res) => {
  try {
    // Assuming req.user.id is available from an auth middleware
    const newPodcast = await Podcast.create({ ...req.body, author: req.user.id });
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

// @desc    Get all podcasts
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

// @desc    Get a single podcast by slug
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

// @desc    Update a podcast
// @route   PATCH /api/v1/podcasts/:slug
// @access  Private
export const updatePodcast = async (req, res) => {
  try {
    const podcast = await Podcast.findOneAndUpdate({ slug: req.params.slug }, req.body, {
      new: true,
      runValidators: true,
    });

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
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Delete a podcast
// @route   DELETE /api/v1/podcasts/:slug
// @access  Private
export const deletePodcast = async (req, res) => {
  try {
    const podcast = await Podcast.findOneAndDelete({ slug: req.params.slug });

    if (!podcast) {
      return res.status(404).json({
        status: 'fail',
        message: 'No podcast found with that slug',
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
