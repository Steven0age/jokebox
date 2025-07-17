import Button from "../Button/Button";
import DeleteIcon from "../Icons/DeleteIcon";
import "./SavedJokeItem.scss";

type JokeItemProps = {
  JokeText: string;
  JokeID: number;
};

export default function SavedJokeItem({ JokeText, JokeID }: JokeItemProps) {
  return (
    <div className="single-joke">
      <p className="single-joke__text">{JokeText}</p>
      <Button
        buttonClass={"button button--delete"}
        buttonID={JokeID}
        buttonIcon={<DeleteIcon />}
      ></Button>
    </div>
  );
}
