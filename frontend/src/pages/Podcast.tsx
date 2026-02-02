import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPodcasts } from '../services/api';
import { BackendPodcast } from '../components/types';
import BlurCircle from '../components/BlurCircle';
import PodcastCard from '../components/PodcastCard';
import Loading from '../components/Loading';

const Podcast = () => {
  const [podcasts, setPodcasts] = useState<BackendPodcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setLoading(true);
        const fetchedPodcasts = await getAllPodcasts();
        setPodcasts(fetchedPodcasts);
      } catch (err) {
        setError('Failed to fetch podcasts. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
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

  return podcasts.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px lg:px-40 xl:px-44 overflow-hidden min-h[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-lg font-medium my-4">Podcasts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {podcasts.map((podcast) => (
          <Link to={`/podcasts/${podcast.slug}`} key={podcast._id}>
            <PodcastCard
              title={podcast.title}
              description={podcast.description.substring(0, 150) + '...'}
              author={{
                name: podcast.author.name,
                avatar: `https://i.pravatar.cc/150?u=${podcast.author._id}`, // Placeholder avatar
              }}
              duration={podcast.duration}
              audioFile={podcast.audioFile}
            />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">Aucun Podcast disponible</h1>
    </div>
  );
};

export default Podcast;
