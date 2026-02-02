import Article from '../models/Article.model.js';

// @desc    Create a new article
// @route   POST /api/v1/articles
// @access  Private
export const createArticle = async (req, res) => {
  try {
    // Assuming req.user.id is available from an auth middleware
    const newArticle = await Article.create({ ...req.body, author: req.user.id });
    res.status(201).json({
      status: 'success',
      data: {
        article: newArticle,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Get all articles
// @route   GET /api/v1/articles
// @access  Public
export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate('author', 'name');
    res.status(200).json({
      status: 'success',
      results: articles.length,
      data: {
        articles,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Get a single article by slug
// @route   GET /api/v1/articles/:slug
// @access  Public
export const getArticle = async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug }).populate(
      'author',
      'name'
    );
    if (!article) {
      return res.status(404).json({
        status: 'fail',
        message: 'No article found with that slug',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        article,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Update an article
// @route   PATCH /api/v1/articles/:slug
// @access  Private
export const updateArticle = async (req, res) => {
  try {
    const article = await Article.findOneAndUpdate({ slug: req.params.slug }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!article) {
      return res.status(404).json({
        status: 'fail',
        message: 'No article found with that slug',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        article,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// @desc    Delete an article
// @route   DELETE /api/v1/articles/:slug
// @access  Private
export const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findOneAndDelete({ slug: req.params.slug });

    if (!article) {
      return res.status(404).json({
        status: 'fail',
        message: 'No article found with that slug',
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
