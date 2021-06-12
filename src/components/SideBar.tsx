import { useEffect, useState } from "react";
import { api } from "../services/api";

import { Button } from "./Button";

import "../styles/sidebar.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SideBarProps {
  onSelectGenre: (genre: GenreResponseProps) => void;
  selectedGenreId: number;
}

export function SideBar({ onSelectGenre, selectedGenreId }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
      const selectedGenre = response.data[0];
      onSelectGenre(selectedGenre);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenre(genre)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
