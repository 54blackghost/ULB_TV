import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  maxAttendees?: number;
  type: 'meetup' | 'workshop' | 'conference';
  image?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  time,
  location,
  attendees,
  maxAttendees,
  type,
  image = "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800"
}) => {
  const getTypeVariant = (type: string) => {
    switch (type) {
      case 'meetup': return 'info';
      case 'workshop': return 'warning';
      case 'conference': return 'success';
      default: return 'default';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'meetup': return 'Meetup';
      case 'workshop': return 'Atelier';
      case 'conference': return 'Conférence';
      default: return 'Événement';
    }
  };

  return (
    <Card>
      {/* Image */}
      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant={getTypeVariant(type) as any}>
            {getTypeLabel(type)}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            <span>{attendees}{maxAttendees && `/${maxAttendees}`}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-700 hover:text-laravel-red transition-colors duration-300 cursor-pointer">
          {title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Event details */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-laravel-red" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-laravel-red" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-laravel-red" />
            <span>{location}</span>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-4 border-t border-gray-100">
          <Button variant="primary" className="w-full">
            S'inscrire à l'événement
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;