import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="relative my-40 mb-60 px-6 md:px lg:px-40 xl:px-44 overflow-hidden min-h-[80vh] text-white">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <p className="text-lg mb-8">Welcome, {user?.name || 'Admin'}!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Articles Management</h2>
          <Link to="/admin/articles" className="text-blue-400 hover:underline">
            Manage Articles
          </Link>
          {/* Add more links/buttons for Create, Edit, Delete */}
        </div>

        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Podcasts Management</h2>
          <Link to="/admin/podcasts" className="text-blue-400 hover:underline">
            Manage Podcasts
          </Link>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Videos Management</h2>
          <Link to="/admin/videos" className="text-blue-400 hover:underline">
            Manage Videos
          </Link>
        </div>
        {/* Add more management sections as needed (e.g., Users, Events, Questions) */}
      </div>
      {/* Placeholder for site activity/statistics */}
      <div className="mt-16 p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Site Activity Overview</h2>
        <p>This section will display statistics and recent interactions on the site.</p>
        {/* Placeholder for charts, recent activity logs, etc. */}
      </div>
    </div>
  );
};

export default AdminDashboard;
