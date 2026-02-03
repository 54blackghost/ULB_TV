import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import app from './app.js';
import connectDB from './config/database.js';
import User from './models/User.model.js'; // Import the User model

// Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// Connect to database
connectDB();

// Function to create a default admin user if one doesn't exist
const createDefaultAdmin = async () => {
  try {
    const adminEmail = 'admin@example.com';
    const adminPassword = 'admin12345'; // This will be hashed by the pre-save hook

    const existingAdmin = await User.findOne({ email: adminEmail, role: 'admin' });

    if (!existingAdmin) {
      await User.create({
        name: 'Default Admin',
        email: adminEmail,
        password: adminPassword,
        role: 'admin',
      });
      console.log('Default admin user created.');
    } else {
      console.log('Default admin user already exists.');
    }
  } catch (error) {
    console.error('Error creating default admin user:', error);
  }
};

createDefaultAdmin(); // Call the function to create default admin

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
