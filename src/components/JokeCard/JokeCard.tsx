import "./JokeCard.scss";
import Button from "../Button/Button";
import Card from "../Card/Card";
import CurrentJoke from "../CurrentJoke/CurrentJoke";

export default function JokeCard() {
  return (
    <div className="current-joke">
      <Card>
        <CurrentJoke></CurrentJoke>
        <Button buttonText={"Neuen Witz laden"}></Button>
        <Button buttonText={"Witz speichern"}></Button>
      </Card>
    </div>
  );
}
