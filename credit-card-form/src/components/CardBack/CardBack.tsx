import { ICardBack } from "../../types";
import "./CardBack.scss";

const CardBack = ({ cvc }: ICardBack) => {
  return (
    <div className="card-back">
      <p className="card-back__cvc">{cvc}</p>
    </div>
  );
};

export default CardBack;
