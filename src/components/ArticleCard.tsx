import React from 'react';
import { Calendar, User, Eye, Heart } from 'lucide-react';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  views: number;
  likes: number;
  category: string;
  image?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  author,
  publishedAt,
  readTime,
  views,
  likes,
  category,
  image = "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800"
}) => {
  return (
    <Card className="overflow-hidden">
      {/* Image */}
      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="info">{category}</Badge>
          <span className="text-xs text-gray-500">{readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-700 line-clamp-2 hover:text-laravel-red transition-colors duration-300 cursor-pointer">
          {title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Author and meta */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            />
            <div>
              <p className="text-sm font-medium text-gray-700">{author.name}</p>
              <div className="flex items-center text-xs text-gray-500 space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{publishedAt}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="h-3 w-3" />
              <span>{views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-3 w-3" />
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ArticleCard;