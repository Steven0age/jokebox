import "./JokeCard.scss";
import Card from "../Card/Card";
import CurrentJoke from "../CurrentJoke/CurrentJoke";
import ButtonBar from "../ButtonBar/ButtonBar";
import { useJokes } from "../../context/JokeContext";

export default function JokeCard() {
  const { actualJoke } = useJokes();

  return (
    <Card childClassName={"joke-card"}>
      <CurrentJoke JokeText={actualJoke} />

      <ButtonBar />
    </Card>
  );
}
