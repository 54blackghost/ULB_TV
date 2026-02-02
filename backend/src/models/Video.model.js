import mongoose from 'mongoose';
import slugify from '../utils/slugify.js';

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A video must have a title'],
      unique: true,
      trim: true,
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'A video must have a description'],
    },
    duration: {
      type: Number, // Duration in seconds
      required: [true, 'A video must have a duration'],
    },
    videoUrl: {
      type: String,
      required: [true, 'A video must have a URL'],
    },
    thumbnail: {
      type: String,
      default: 'default-thumbnail.jpg',
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A video must have an author'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Pre-save middleware to generate slug
videoSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title);
  }
  next();
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
