import { useState, useEffect } from "react";

import Button from "./Button"
import { api } from "../services/api"

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SelectedGenreProps {
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar({ selectedGenreId, handleClickButton }: SelectedGenreProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
    <span>
      Watch
      <p>Me</p>
    </span>

    <div className="buttons-container">
      {genres.map(({ id, name, title  }: GenreResponseProps) => (
        <Button
          key={id}
          title={title}
          iconName={name}
          onClick={() => handleClickButton(id)}
          selected={selectedGenreId === id}
        />
      ))}
    </div>
  </nav>
  )
}