import { useState, useEffect } from "react";
import { api } from "../services/api";

import { MovieCard } from "./MovieCard"
interface SelectedGenreProps {
  selectedGenreId: number;
  selectedGenre: GenreResponseProps; 
}
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content({ selectedGenreId, selectedGenre }: SelectedGenreProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  console.log(selectedGenreId)
  console.log(movies)

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenre])

 return(
  <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
 ) 
  
}