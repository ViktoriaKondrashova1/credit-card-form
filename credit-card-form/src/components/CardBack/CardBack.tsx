import "./CardBack.scss";

interface ICardBack {
  cvc: string;
}

const CardBack = ({ cvc }: ICardBack) => {
  return (
    <div className="card-back">
      <p className="card-back__cvc">{cvc}</p>
    </div>
  );
};

export default CardBack;
