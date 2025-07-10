import "./JokeCard.scss";
import Button from "../Button/Button";
import SaveIcon from "../Icons/SaveIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import Card from "../Card/Card";
import CurrentJoke from "../CurrentJoke/CurrentJoke";

export default function JokeCard() {
  return (
    <div className="current-joke">
      <Card>
        <CurrentJoke></CurrentJoke>
        <Button
          buttonClass={"button button--primary"}
          buttonText={"Neuen Witz laden"}
        ></Button>
        <Button
          buttonClass={"button button--secondary"}
          buttonText={"Witz speichern"}
          buttonIcon={<SaveIcon></SaveIcon>}
        ></Button>
      </Card>
    </div>
  );
}
