import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoBySlug } from '../services/api';
import { BackendVideo } from '../components/types';
import Loading from '../components/Loading';
import BlurCircle from '../components/BlurCircle';

const VideoDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [video, setVideo] = useState<BackendVideo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      if (!slug) {
        setError('Video slug is missing.');
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const fetchedVideo = await getVideoBySlug(slug);
        setVideo(fetchedVideo);
      } catch (err) {
        setError('Failed to fetch video. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [slug]);

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

  if (!video) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-center">Video non trouvée</h1>
      </div>
    );
  }

  // Helper to format duration from seconds to MM:SS
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="relative my-40 mb-60 px-6 md:px lg:px-40 xl:px-44 overflow-hidden min-h[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{video.title}</h1>
        <div className="flex items-center text-gray-600 mb-8 text-sm">
          <img
            src={`https://i.pravatar.cc/50?u=${video.author._id}`} // Placeholder avatar
            alt={video.author.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>Par {video.author.name}</span>
          <span className="mx-2">•</span>
          <span>
            Publié le{' '}
            {new Date(video.createdAt).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="mx-2">•</span>
          <span>Durée: {formatDuration(video.duration)}</span>
        </div>

        {video.videoUrl && (
          <div className="mb-8">
            <video controls src={video.videoUrl} poster={video.thumbnail} className="w-full">
              Your browser does not support the video element.
            </video>
          </div>
        )}

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: video.description }}>
          {/* Video description will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
