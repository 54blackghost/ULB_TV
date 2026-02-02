import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Routers
import articleRouter from './routes/article.routes.js';
import podcastRouter from './routes/podcast.routes.js';
import videoRouter from './routes/video.routes.js';
import authRouter from './routes/auth.routes.js';

const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173', // Or your frontend URL
  credentials: true,
}));
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// API Routes
app.use('/api/v1/articles', articleRouter);
app.use('/api/v1/podcasts', podcastRouter);
app.use('/api/v1/videos', videoRouter);
app.use('/api/v1/users', authRouter);

// Not Found Handler
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

// Global Error Handling Middleware (optional, but good practice)
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

export default app;
