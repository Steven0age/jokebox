import "./Button.scss";

type ButtonProps = {
  buttonText?: string;
  buttonClass?: string;
  buttonIcon?: React.ReactNode;
  buttonDisabled?: boolean;
};
export default function Button({
  buttonText,
  buttonClass,
  buttonIcon,
  buttonDisabled,
}: ButtonProps) {
  return (
    <button
      className={`${buttonClass} ${buttonDisabled ? "button--disabled" : ""}`}
    >
      {buttonText}
      {buttonIcon}
    </button>
  );
}
