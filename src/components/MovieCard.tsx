import { memo } from 'react'
import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}
const MovieCard = ({ poster, rating, runtime, title }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <img
        src={poster}
        alt={title}
      />

      <div>
        <div className="movie-info">
          <span>{title}</span>
          <div className="meta">
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(MovieCard);