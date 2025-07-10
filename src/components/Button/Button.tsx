import "./Button.scss";

type ButtonProps = {
  buttonText: string;
  buttonClass: string;
};
export default function Button({
  buttonText,
  buttonClass,
  buttonIcon,
}: ButtonProps) {
  return (
    <button className={buttonClass}>
      {buttonText}
      {buttonIcon}
    </button>
  );
}
