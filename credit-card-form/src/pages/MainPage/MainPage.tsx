import { useState } from "react";
import Form from "../../components/Form/Form";
import CardFront from "../../components/CardFront/CardFront";
import "./MainPage.scss";

const MainPage = () => {
  const [number, setNumber] = useState<string>("0000 0000 0000 0000");
  const [name, setName] = useState<string>("jane applessed");
  const [expiry, setExpiry] = useState<string>("00/00");

  setNumber;
  setName;
  setExpiry;

  return (
    <div className="container main">
      <div className="main__cards">
        <CardFront number={number} name={name} expiry={expiry} />
      </div>
      <Form />
    </div>
  );
};

export default MainPage;
