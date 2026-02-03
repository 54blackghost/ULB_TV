import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createAdminVideo, getAdminVideoById, updateAdminVideo } from '../services/videoService';
import { BackendVideo } from '../components/types'; // Assuming BackendVideo type is defined
import toast from 'react-hot-toast'; // Assuming react-hot-toast is available

interface VideoFormProps {
  isEditing?: boolean;
}

const VideoForm: React.FC<VideoFormProps> = ({ isEditing = false }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState<number>(0);
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // Get video ID from URL for editing

  useEffect(() => {
    if (isEditing && id) {
      const fetchVideo = async () => {
        setLoading(true);
        try {
          const response = await getAdminVideoById(id);
          const video: BackendVideo = response.data.video;
          setTitle(video.title);
          setDescription(video.description);
          setDuration(video.duration);
          setVideoUrl(video.videoUrl || '');
          setThumbnail(video.thumbnail || '');
        } catch (err: unknown) {
          const errorMessage = (err instanceof Error) ? err.message : 'Failed to fetch video for editing';
          setError(errorMessage);
          toast.error(errorMessage);
        } finally {
          setLoading(false);
        }
      };
      fetchVideo();
    }
  }, [isEditing, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const videoData = { title, description, duration, videoUrl, thumbnail };

    try {
      if (isEditing && id) {
        await updateAdminVideo(id, videoData);
        toast.success('Video updated successfully!');
      } else {
        await createAdminVideo(videoData);
        toast.success('Video created successfully!');
      }
      navigate('/admin/videos'); // Redirect to video list after save
    } catch (err: unknown) {
      const errorMessage = (err instanceof Error) ? err.message : 'Failed to save video';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[url('/logo.png')] bg-cover bg-center overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="sm:w-87.5 w-full text-center bg-gray-900 border border-gray-800 rounded-2xl px-8 py-8 z-10"
      >
        <h1 className="text-white text-3xl mt-2 font-medium">
          {isEditing ? 'Edit Video' : 'Create New Video'}
        </h1>

        {error && <p className="text-sm text-red-600 mt-4">{error}</p>}

        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="text"
              name="title"
              placeholder="Video Title"
              className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex items-start w-full bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden pl-6 py-3 gap-2">
            <textarea
              name="description"
              placeholder="Video Description"
              rows={6}
              className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="flex items-center w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="number"
              name="duration"
              placeholder="Duration (in seconds)"
              className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              required
            />
          </div>

          <div className="flex items-center w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="text"
              name="videoUrl"
              placeholder="Video URL (e.g., YouTube link)"
              className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="text"
              name="thumbnail"
              placeholder="Thumbnail URL"
              className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Video'}
        </button>
      </form>
    </div>
  );
};

export default VideoForm;
