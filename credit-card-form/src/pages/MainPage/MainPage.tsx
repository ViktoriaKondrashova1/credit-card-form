import { useState } from "react";
import Form from "../../components/Form/Form";
import CardFront from "../../components/CardFront/CardFront";
import CardBack from "../../components/CardBack/CardBack";
import Success from "../../components/Success/Success";
import { sep } from "../../helpers";
import "./MainPage.scss";

const MainPage = () => {
  const [number, setNumber] = useState<string>("0000 0000 0000 0000");
  const [name, setName] = useState<string>("jane applessed");
  const [month, setMonth] = useState<string>("00");
  const [year, setYear] = useState<string>("00");
  const [cvc, setCvc] = useState<string>("000");
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <div className="container main">
      <div className="main__cards">
        <CardFront number={number} name={name} month={month} year={year} />
        <CardBack cvc={cvc} />
      </div>
      {success ? (
        <Success handleClick={() => setSuccess(false)} />
      ) : (
        <Form
          nameChange={(e) => setName(e.currentTarget.value)}
          numberChange={(e) =>
            setNumber(sep(e.currentTarget.value, 4).join(" "))
          }
          monthChange={(e) => setMonth(e.currentTarget.value)}
          yearChange={(e) => setYear(e.currentTarget.value)}
          cvcChange={(e) => setCvc(e.currentTarget.value)}
          successSubmit={() => setSuccess(true)}
        />
      )}
    </div>
  );
};

export default MainPage;
