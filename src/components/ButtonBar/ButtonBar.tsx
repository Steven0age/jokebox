import "./ButtonBar.scss";
import Button from "../Button/Button";
import SaveIcon from "../Icons/SaveIcon";
import { useJokes } from "../../context/JokeContext";

export default function ButtonBar() {
  const { loadNewJoke } = useJokes();
  return (
    <div className="button-bar">
      <Button
        buttonClass={"button button--primary"}
        buttonText={"Neuen Witz laden"}
        buttonClick={loadNewJoke}
      ></Button>
      <Button
        buttonClass={"button button--secondary"}
        buttonText={"[TEST - witz laden]Witz speichern"}
        buttonIcon={<SaveIcon />}
        buttonDisabled={true}
      ></Button>
    </div>
  );
}
