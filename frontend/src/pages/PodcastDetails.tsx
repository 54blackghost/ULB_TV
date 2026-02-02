import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastBySlug } from '../services/api';
import { BackendPodcast } from '../components/types';
import Loading from '../components/Loading';
import BlurCircle from '../components/BlurCircle';

const PodcastDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [podcast, setPodcast] = useState<BackendPodcast | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPodcast = async () => {
      if (!slug) {
        setError('Podcast slug is missing.');
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const fetchedPodcast = await getPodcastBySlug(slug);
        setPodcast(fetchedPodcast);
      } catch (err) {
        setError('Failed to fetch podcast. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcast();
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

  if (!podcast) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-center">Podcast non trouvé</h1>
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{podcast.title}</h1>
        <div className="flex items-center text-gray-600 mb-8 text-sm">
          <img
            src={`https://i.pravatar.cc/50?u=${podcast.author._id}`} // Placeholder avatar
            alt={podcast.author.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>Par {podcast.author.name}</span>
          <span className="mx-2">•</span>
          <span>
            Publié le{' '}
            {new Date(podcast.createdAt).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="mx-2">•</span>
          <span>Durée: {formatDuration(podcast.duration)}</span>
        </div>

        {podcast.audioFile && (
          <div className="mb-8">
            <audio controls src={podcast.audioFile} className="w-full">
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: podcast.description }}>
          {/* Podcast description will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default PodcastDetails;
