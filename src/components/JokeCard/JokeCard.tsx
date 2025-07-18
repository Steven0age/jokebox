import "./JokeCard.scss";
import Card from "../Card/Card";
import CurrentJoke from "../CurrentJoke/CurrentJoke";
import ButtonBar from "../ButtonBar/ButtonBar";
import { useJokes } from "../../context/JokeContext";

export default function JokeCard() {
  const { currentJoke: actualJoke } = useJokes();

  return (
    <Card childClassName={"joke-card"}>
      <CurrentJoke
        JokeText={
          actualJoke ?? "Klicke auf den Button, um einen Witz zu laden !"
        }
      />

      <ButtonBar />
    </Card>
  );
}
