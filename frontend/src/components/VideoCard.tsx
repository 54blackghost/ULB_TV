import React from 'react';
import { PlayCircle, User } from 'lucide-react'; // Placeholder icons, adjust as needed
import Card from './ui/Card'; // Assuming ui/Card exists
import Badge from './ui/Badge'; // Assuming ui/Badge exists

interface VideoCardProps {
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  duration: number; // in seconds
  videoUrl: string;
  thumbnail: string;
  // Add any other props you want to display on the card
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  author,
  duration,
  videoUrl,
  thumbnail,
}) => {
  // Helper to format duration from seconds to MM:SS
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video mb-4 overflow-hidden rounded-lg relative"> {/* Added relative for play button positioning */}
        {/* Thumbnail or placeholder */}
        <img
          src={thumbnail || 'https://via.placeholder.com/300x150?text=No+Thumbnail'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Play icon overlay - optional */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <PlayCircle className="h-16 w-16 text-white" />
        </div>
      </div>

      <div className="space-y-3 p-4">
        <Badge variant="info">Video</Badge> {/* Generic badge, can be dynamic */}
        <h3 className="text-xl font-bold text-gray-700 line-clamp-2 hover:text-red-600 transition-colors duration-300 cursor-pointer">
          {title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            />
            <p className="text-sm font-medium text-gray-700">{author.name}</p>
          </div>
          <div className="text-sm text-gray-500">
            {formatDuration(duration)}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
