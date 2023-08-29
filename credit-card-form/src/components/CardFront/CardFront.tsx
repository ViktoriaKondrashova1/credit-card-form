import "./CardFront.scss";

interface ICardFront {
  number: string;
  name: string;
  expiry: string;
}

const CardFront = ({ number, name, expiry }: ICardFront) => {
  return (
    <div className="card-front">
      <div className="card-front__logo">
        <div className="card-front__logo-big" />
        <div className="card-front__logo-small" />
      </div>
      <p className="card-front__num">{number}</p>
      <div className="card-front__owner-info">
        <p className="card-front__info">{name}</p>
        <p className="card-front__info">{expiry}</p>
      </div>
    </div>
  );
};

export default CardFront;
