import "./JokeCard.scss";
import Card from "../Card/Card";
import CurrentJoke from "../CurrentJoke/CurrentJoke";
import ButtonBar from "../ButtonBar/ButtonBar";

export default function JokeCard() {
  return (
    <>
      <Card childClassName={"joke-card"}>
        <CurrentJoke />
        <ButtonBar />
      </Card>
    </>
  );
}
