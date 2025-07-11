import "./JokeCard.scss";
import Card from "../Card/Card";
import CurrentJoke from "../CurrentJoke/CurrentJoke";
import ButtonBar from "../ButtonBar/ButtonBar";
import { useState } from "react";

export default function JokeCard() {
  const [loadedJoke, setLoadedJoke] = useState(
    "Klicke auf den Button, um einen Witz zu laden !"
  );

  return (
    <Card childClassName={"joke-card"}>
      <CurrentJoke JokeText={loadedJoke} />

      <ButtonBar />
    </Card>
  );
}
