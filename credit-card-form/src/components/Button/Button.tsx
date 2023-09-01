import { IButton } from "../../types";
import "./Button.scss";

const Button = ({ children, type, onClick }: IButton) => {
  return (
    <button type={type} onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
