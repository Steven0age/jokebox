import "./SavedJokesList.scss";
import SavedJokeItem from "../SavedJokeItem/SavedJokeItem";
import { useEffect } from "react";
import { useJokes } from "../../context/JokeContext";

export default function SavedJokesList() {
  const { loadSavedJokes } = useJokes();

  useEffect(() => {
    loadSavedJokes();
  }, []);

  return (
    <div className="saved-jokes saved-jokes__jokes-list">
      <SavedJokeItem JokeItemText={"gespeicherter Witz 1"} />
      <SavedJokeItem JokeItemText={"gespeicherter Witz 2"} />
      <SavedJokeItem JokeItemText={"gespeicherter Witz 3"} />
      <SavedJokeItem JokeItemText={"gespeicherter Witz 4"} />
      <SavedJokeItem JokeItemText={"gespeicherter Witz 5"} />
      <SavedJokeItem JokeItemText={"gespeicherter Witz 6"} />
      <SavedJokeItem JokeItemText={"gespeicherter Witz 7"} />
    </div>
  );
}
