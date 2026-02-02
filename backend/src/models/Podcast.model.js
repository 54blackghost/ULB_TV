import mongoose from 'mongoose';
import slugify from '../utils/slugify.js';

const podcastSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A podcast must have a title'],
      unique: true,
      trim: true,
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'A podcast must have a description'],
    },
    duration: {
      type: Number, // Duration in seconds
      required: [true, 'A podcast must have a duration'],
    },
    audioFile: {
      type: String,
      required: [true, 'A podcast must have an audio file'],
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A podcast must have an author'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Pre-save middleware to generate slug
podcastSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title);
  }
  next();
});

const Podcast = mongoose.model('Podcast', podcastSchema);

export default Podcast;
