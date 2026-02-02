import express from 'express';
import { signup, login, logout, getAllUsers, getUser, updateUser, deleteUser, updateUserRole } from '../controllers/auth.controller.js';
import { protect } from '../middlewares/auth.middleware.js'; // Import protect middleware
import { restrictTo } from '../middlewares/role.middleware.js'; // Import restrictTo middleware

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

// Admin-specific User Management Routes
router.use(protect); // All routes after this are protected
router.use(restrictTo('admin')); // All routes after this are restricted to admin

router.route('/')
  .get(getAllUsers); // GET /api/v1/users (get all users)

router.route('/:id')
  .get(getUser) // GET /api/v1/users/:id (get a single user)
  .patch(updateUser) // PATCH /api/v1/users/:id (update a user)
  .delete(deleteUser); // DELETE /api/v1/users/:id (delete a user)

router.patch('/:id/updateRole', updateUserRole); // PATCH /api/v1/users/:id/updateRole (update user role)

export default router;
