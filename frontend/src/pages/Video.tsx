import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllVideos } from '../services/api';
import { BackendVideo } from '../components/types';
import BlurCircle from '../components/BlurCircle';
import VideoCard from '../components/VideoCard';
import Loading from '../components/Loading';

const Video = () => {
  const [videos, setVideos] = useState<BackendVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const fetchedVideos = await getAllVideos();
        setVideos(fetchedVideos);
      } catch (err) {
        setError('Failed to fetch videos. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-center text-red-500">{error}</h1>
      </div>
    );
  }

  return videos.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px lg:px-40 xl:px-44 overflow-hidden min-h[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-lg font-medium my-4">Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <Link to={`/videos/${video.slug}`} key={video._id}>
            <VideoCard
              title={video.title}
              description={video.description.substring(0, 150) + '...'}
              author={{
                name: video.author.name,
                avatar: `https://i.pravatar.cc/150?u=${video.author._id}`, // Placeholder avatar
              }}
              duration={video.duration}
              videoUrl={video.videoUrl}
              thumbnail={video.thumbnail}
            />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">Aucune Vidéo disponible</h1>
    </div>
  );
};

export default Video;
