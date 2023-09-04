import { useState } from "react";
import Form from "../../components/Form/Form";
import CardFront from "../../components/CardFront/CardFront";
import CardBack from "../../components/CardBack/CardBack";
import Success from "../../components/Success/Success";
import { sep } from "../../helpers";
import { ICardData } from "../../types";
import "./MainPage.scss";

const MainPage = () => {
  const [cardData, setCardData] = useState<ICardData>({
    name: "jane applessed",
    number: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  });
  const [success, setSuccess] = useState<boolean>(false);

  const pressContinue = () => {
    setSuccess(false);
    setCardData({
      name: "jane applessed",
      number: "0000 0000 0000 0000",
      month: "00",
      year: "00",
      cvc: "000",
    });
  };

  return (
    <div className="container main">
      <div className="main__cards">
        <CardFront
          number={cardData.number}
          name={cardData.name}
          month={cardData.month}
          year={cardData.year}
        />
        <CardBack cvc={cardData.cvc} />
      </div>
      {success ? (
        <Success handleClick={pressContinue} />
      ) : (
        <Form
          nameChange={(e) =>
            setCardData({ ...cardData, name: e.currentTarget.value })
          }
          numberChange={(e) =>
            setCardData({
              ...cardData,
              number: sep(e.currentTarget.value, 4).join(" "),
            })
          }
          monthChange={(e) =>
            setCardData({ ...cardData, month: e.currentTarget.value })
          }
          yearChange={(e) =>
            setCardData({ ...cardData, year: e.currentTarget.value })
          }
          cvcChange={(e) =>
            setCardData({ ...cardData, cvc: e.currentTarget.value })
          }
          successSubmit={() => setSuccess(true)}
        />
      )}
    </div>
  );
};

export default MainPage;
