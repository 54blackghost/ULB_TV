import React from 'react';
import { useAuth } from '../context/AuthContext';
import AdminStatCard from '../components/AdminStatCard'; // Import the new component

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Dashboard
        </h2>
        {/* Placeholder for Breadcrumb if needed */}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <AdminStatCard
          title="Total Articles"
          total="1200"
          icon={
            <svg className="fill-primary dark:fill-white" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3333 3.66663H3.66667C3.24833 3.66663 2.91667 4.0083 2.91667 4.42496V17.5833C2.91667 18.0016 3.24833 18.3333 3.66667 18.3333H18.3333C18.7517 18.3333 19.0833 18.0016 19.0833 17.5833V4.42496C19.0833 4.0083 18.7517 3.66663 18.3333 3.66663ZM3.66667 2.91663C2.84667 2.91663 2.16667 3.59663 2.16667 4.42496V17.5833C2.16667 18.4033 2.84667 19.0833 3.66667 19.0833H18.3333C19.1533 19.0833 19.8333 18.4033 19.8333 17.5833V4.42496C19.8333 3.59663 19.1533 2.91663 18.3333 2.91663H3.66667Z" fill=""/>
            </svg>
          }
        />

        <AdminStatCard
          title="Total Podcasts"
          total="50"
          icon={
            <svg className="fill-primary dark:fill-white" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 20.1666C16.0375 20.1666 20.1666 16.0375 20.1666 11C20.1666 5.96245 16.0375 1.83331 11 1.83331C5.96245 1.83331 1.83331 5.96245 1.83331 11C1.83331 16.0375 5.96245 20.1666 11 20.1666Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 11H14" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 8V14" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />

        <AdminStatCard
          title="Total Videos"
          total="300"
          icon={
            <svg className="fill-primary dark:fill-white" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.1666 5.5C20.1666 4.96957 19.9559 4.46086 19.5808 4.08579C19.2057 3.71072 18.697 3.5 18.1666 3.5H4.16663C3.6362 3.5 3.12749 3.71072 2.75242 4.08579C2.37736 4.46086 2.16663 4.96957 2.16663 5.5V16.5C2.16663 17.0304 2.37736 17.5391 2.75242 17.9142C3.12749 18.2893 3.6362 18.5 4.16663 18.5H18.1666C18.697 18.5 19.2057 18.2893 19.5808 17.9142C19.9559 17.5391 20.1666 17.0304 20.1666 16.5V5.5Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.16663 5.5L2.16663 16.5L20.1666 16.5L20.1666 5.5L2.16663 5.5Z" fill="" fillOpacity="0"/>
              <path d="M13.6666 11L9.66663 9L9.66663 13L13.6666 11Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />

        <AdminStatCard
          title="Total Users"
          total="1000"
          icon={
            <svg className="fill-primary dark:fill-white" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 11.5C14.0375 11.5 16.5 9.0375 16.5 6C16.5 2.9625 14.0375 0.5 11 0.5C7.9625 0.5 5.5 2.9625 5.5 6C5.5 9.0375 7.9625 11.5 11 11.5Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.3333 21.5C19.3333 17.8083 15.6833 14.8333 11 14.8333C6.31663 14.8333 2.66663 17.8083 2.66663 21.5" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
      </div>

      {/* Additional dashboard components can go here */}
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* Placeholder for Chart / Table */}
        <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-8">
          <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
            Site Overview
          </h4>
          <p className="text-sm">This section will contain charts or recent activity.</p>
        </div>
        {/* Placeholder for another component */}
        <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
            Recent Activity
          </h4>
          <p className="text-sm">This section will show recent user or admin actions.</p>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
