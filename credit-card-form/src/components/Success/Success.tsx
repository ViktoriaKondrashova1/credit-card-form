import Button from "../Button/Button";
import { ISuccess } from "../../types";
import "./Success.scss";

const Success = ({ handleClick }: ISuccess) => {
  return (
    <div className="success">
      <h2 className="success__title">thank you!</h2>
      <p className="success__text">We've added your card details</p>
      <Button type="button" onClick={handleClick}>
        Continue
      </Button>
    </div>
  );
};

export default Success;
