import Button from "../Button/Button";
import DeleteIcon from "../Icons/DeleteIcon";
import "./SavedJokeItem.scss";

type JokeItemProps = {
  JokeItemText: string;
};

export default function SavedJokeItem({ JokeItemText }: JokeItemProps) {
  return (
    <div className="single-joke">
      <p className="single-joke__text">{JokeItemText}</p>
      <Button
        buttonClass={"button button--delete"}
        buttonIcon={<DeleteIcon />}
      ></Button>
    </div>
  );
}
