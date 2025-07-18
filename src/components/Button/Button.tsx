import "./Button.scss";

type ButtonProps = {
  buttonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText?: string;
  buttonClass?: string;
  buttonIcon?: React.ReactNode;
  buttonDisabled?: boolean;
};
export default function Button({
  buttonClick,
  buttonText,
  buttonClass,
  buttonIcon,
  buttonDisabled,
}: ButtonProps) {
  return (
    <button
      className={`${buttonClass} ${buttonDisabled ? "button--disabled" : ""}`}
      onClick={buttonClick}
    >
      {buttonText}
      {buttonIcon}
    </button>
  );
}
