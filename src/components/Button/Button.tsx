type ButtonProps = {
  buttonText: string;
};
export default function Button({ buttonText }: ButtonProps) {
  return <button>{buttonText}</button>;
}
