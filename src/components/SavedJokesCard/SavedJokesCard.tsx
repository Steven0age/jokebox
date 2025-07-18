import "./SavedJokesCard.scss";
import Card from "../Card/Card";
import SavedJokesList from "../SavedJokesList/SavedJokesList";

export default function SavedJokesCard() {
  return (
    <>
      <Card childClassName={"saved-jokes-card"}>
        <h2 className="saved-jokes-card__headline">Gespeicherte Witze</h2>
        <SavedJokesList />
      </Card>
    </>
  );
}
