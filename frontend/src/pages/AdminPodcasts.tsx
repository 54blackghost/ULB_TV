import React, { useEffect, useState } from 'react';
import { getAllAdminPodcasts, deleteAdminPodcast } from '../services/podcastService';
import { Link } from 'react-router-dom';
import  {BackendPodcast}  from '../components/types'; // Assuming BackendPodcast type is defined
import toast from 'react-hot-toast'; // Import toast

const AdminPodcasts: React.FC = () => {
  const [podcasts, setPodcasts] = useState<BackendPodcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    setLoading(true);
    try {
      const response = await getAllAdminPodcasts();
      setPodcasts(response.data.podcasts);
    } catch (err: unknown) {
      const errorMessage = (err instanceof Error) ? err.message : 'Failed to fetch podcasts';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this podcast?')) {
      try {
        await deleteAdminPodcast(id);
        fetchPodcasts(); // Refresh the list after deletion
        toast.success('Podcast deleted successfully!');
      } catch (err: unknown) {
        const errorMessage = (err instanceof Error) ? err.message : 'Failed to delete podcast';
        alert(errorMessage);
        toast.error(errorMessage);
      }
    }
  };

  if (loading) {
    return <div className="text-black dark:text-white">Loading podcasts...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Manage Podcasts
        </h2>
        <Link to="/admin/podcasts/new" className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
          Create New Podcast
        </Link>
      </div>

      {podcasts.length === 0 ? (
        <p className="text-black dark:text-white">No podcasts found.</p>
      ) : (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 dark:bg-meta-4">
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    Title
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Author
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {podcasts.map((podcast) => (
                  <tr key={podcast._id}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {podcast.title}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">{podcast.author.name}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <Link to={`/admin/podcasts/edit/${podcast._id}`} className="hover:text-primary">
                          {/* Edit Icon */}
                          <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7417 2.01633L16.0333 7.308L4.85834 18.483L1.5 18.483L1.5 15.1247L12.675 3.94966L10.7417 2.01633ZM13.8833 0.699661L15.425 2.24133L16.8917 3.708L14.4917 6.108L16.0333 7.65L14.7833 8.9L13.2417 7.35833L11.8917 8.70833L10.35 7.16666L14.3167 3.2L12.0167 0.908L13.8833 0.699661ZM0.666667 19.3333C0.666667 19.7499 1.00833 20.0833 1.42499 20.0833H15.0833C15.4999 20.0833 15.8333 19.7499 15.8333 19.3333V18.1667H0.666667V19.3333Z" fill=""/>
                          </svg>
                        </Link>
                        <button onClick={() => handleDelete(podcast._id)} className="hover:text-primary">
                          {/* Delete Icon */}
                          <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0625 2.99996H10.9688L10.4531 2.24996H7.54688L7.03125 2.99996H3.9375C3.51562 2.99996 3.1875 3.32808 3.1875 3.74996C3.1875 4.17183 3.51562 4.49996 3.9375 4.49996H14.0625C14.4844 4.49996 14.8125 4.17183 14.8125 3.74996C14.8125 3.32808 14.4844 2.99996 14.0625 2.99996ZM4.6875 16.4999C4.6875 16.9218 5.01563 17.2499 5.4375 17.2499H12.5625C12.9844 17.2499 13.3125 16.9218 13.3125 16.4999V5.99996H4.6875V16.4999Z" fill=""/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPodcasts;
