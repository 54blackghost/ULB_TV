import Article from '../models/Article.model.js';
import slugify from '../utils/slugify.js';

// @desc    Create a new article
// @route   POST /api/v1/articles
// @access  Private (Admin)
export const createArticle = async (req, res) => {
  try {
    const { title, content, coverImage, videoUrl } = req.body;
    const newSlug = slugify(title);

    const newArticle = await Article.create({
      title,
      content,
      coverImage, // Use coverImage
      videoUrl,   // Add videoUrl
      slug: newSlug,
      author: req.user.id,
    });
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

// @desc    Get all articles for public view
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

// @desc    Get a single article by slug for public view
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

// @desc    Get all articles for admin view
// @route   GET /api/v1/articles/admin
// @access  Private (Admin)
export const getAllArticlesAdmin = async (req, res) => {
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

// @desc    Get a single article by ID for admin view
// @route   GET /api/v1/articles/admin/:id
// @access  Private (Admin)
export const getArticleByIdAdmin = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate(
      'author',
      'name'
    );
    if (!article) {
      return res.status(404).json({
        status: 'fail',
        message: 'No article found with that ID',
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

// @desc    Update an article by ID (Admin)
// @route   PATCH /api/v1/articles/admin/:id
// @access  Private (Admin)
export const updateArticleAdmin = async (req, res) => {
  try {
    const { title, content, coverImage, videoUrl } = req.body; // Use coverImage and videoUrl
    const updateFields = { content, coverImage, videoUrl }; // Use coverImage and videoUrl
    if (title) {
      updateFields.title = title;
      updateFields.slug = slugify(title);
    }
    const article = await Article.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!article) {
      return res.status(404).json({
        status: 'fail',
        message: 'No article found with that ID',
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

// @desc    Delete an article by ID (Admin)
// @route   DELETE /api/v1/articles/admin/:id
// @access  Private (Admin)
export const deleteArticleAdmin = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({
        status: 'fail',
        message: 'No article found with that ID',
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
