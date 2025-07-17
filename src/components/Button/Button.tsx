import "./Button.scss";

type ButtonProps = {
  buttonClick?: (...args: any[]) => any;
  buttonText?: string;
  buttonClass?: string;
  buttonIcon?: React.ReactNode;
  buttonDisabled?: boolean;
  buttonID: number;
};
export default function Button({
  buttonClick,
  buttonText,
  buttonClass,
  buttonIcon,
  buttonDisabled,
  buttonID,
}: ButtonProps) {
  return (
    <button
      className={`${buttonClass} ${buttonDisabled ? "button--disabled" : ""}`}
      onClick={buttonClick}
      data-joke-id={buttonID}
    >
      {buttonText}
      {buttonIcon}
    </button>
  );
}
