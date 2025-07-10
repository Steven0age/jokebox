import "./ButtonBar.scss";
import Button from "../Button/Button";
import SaveIcon from "../Icons/SaveIcon";

export default function ButtonBar() {
  return (
    <div className="button-bar">
      <Button
        buttonClass={"button button--primary"}
        buttonText={"Neuen Witz laden"}
      ></Button>
      <Button
        buttonClass={"button button--secondary"}
        buttonText={"Witz speichern"}
        buttonIcon={<SaveIcon />}
      ></Button>
    </div>
  );
}
