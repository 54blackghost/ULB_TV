export const restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles is an array, e.g., ['admin', 'lead-guide']
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: 'fail',
        message: 'You do not have permission to perform this action',
      });
    }
    next();
  };
};
