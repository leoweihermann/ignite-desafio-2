import { useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  function handleSelectedGenre(genre: GenreResponseProps) {
    setSelectedGenre(genre);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        onSelectGenre={handleSelectedGenre}
        selectedGenreId={selectedGenre.id}
      />
      <Content selectedGenre={selectedGenre} />
    </div>
  );
}
