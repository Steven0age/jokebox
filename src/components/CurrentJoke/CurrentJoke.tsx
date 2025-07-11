import "./CurrentJoke.scss";

type JokeCardProps = {
  JokeText: string;
};

export default function JokeCard({ JokeText }: JokeCardProps) {
  return <p className="joke">{JokeText}</p>;
}
