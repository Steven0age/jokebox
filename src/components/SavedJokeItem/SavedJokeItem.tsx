import Button from "../Button/Button";
import DeleteIcon from "../Icons/DeleteIcon";
import "./SavedJokeItem.scss";

type SavedJokeItemProps = {
  JokeText: string;
  onDelete: () => void;
};

export default function SavedJokeItem({
  JokeText,
  onDelete,
}: SavedJokeItemProps) {
  return (
    <div className="single-joke">
      <p className="single-joke__text">{JokeText}</p>
      <Button
        buttonClass={"button button--delete"}
        buttonIcon={<DeleteIcon />}
        buttonClick={onDelete}
      ></Button>
    </div>
  );
}
