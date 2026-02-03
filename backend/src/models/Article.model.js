import mongoose from 'mongoose';
import slugify from '../utils/slugify.js';

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'An article must have a title'],
      unique: true,
      trim: true,
    },
    slug: String,
    content: {
      type: String,
      required: [true, 'An article must have content'],
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'An article must have an author'],
    },
    coverImage: {
      type: String,
      default: 'default.jpg',
    },
    videoUrl: String, // Add videoUrl field
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Pre-save middleware to generate slug
articleSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title);
  }
  next();
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
