import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from './Loading'; // Assuming a Loading component exists
import AdminLayout from './AdminLayout'; // Import AdminLayout

interface ProtectedAdminRouteProps {
  // children?: React.ReactNode; // Not needed with Outlet
}

const ProtectedAdminRoute: React.FC<ProtectedAdminRouteProps> = () => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return <Loading />; // Show a loading spinner while authentication state is being determined
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  if (!isAdmin) {
    // Optionally redirect to home or show an unauthorized message
    return <Navigate to="/" replace />; // Redirect to home if not admin
  }

  return (
    <AdminLayout>
      <Outlet /> {/* Render child routes if authenticated and admin */}
    </AdminLayout>
  );
};

export default ProtectedAdminRoute;
