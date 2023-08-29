import "./CardFront.scss";

interface ICardFront {
  number: string;
  name: string;
  month: string;
  year: string;
}

const CardFront = ({ number, name, month, year }: ICardFront) => {
  return (
    <div className="card-front">
      <div className="card-front__logo">
        <div className="card-front__logo-big" />
        <div className="card-front__logo-small" />
      </div>
      <p className="card-front__num">{number}</p>
      <div className="card-front__owner-info">
        <p className="card-front__info">{name}</p>
        <div className="card-front__exp">
          <p className="card-front__info">{month}</p>/
          <p className="card-front__info">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
