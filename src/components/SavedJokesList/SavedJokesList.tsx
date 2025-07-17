import "./SavedJokesList.scss";
import SavedJokeItem from "../SavedJokeItem/SavedJokeItem";
import { useEffect } from "react";
import { useJokes } from "../../context/JokeContext";

export default function SavedJokesList() {
  const { loadSavedJokes, savedJokes } = useJokes();

  useEffect(() => {
    loadSavedJokes();
  }, []);

  return (
    <div className="saved-jokes saved-jokes__jokes-list">
      {savedJokes.map((i) => (
        <SavedJokeItem key={i.id} JokeText={i.joke} JokeID={i.id} />
      ))}
    </div>
  );
}
