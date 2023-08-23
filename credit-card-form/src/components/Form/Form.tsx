import BaseInput from "../Inputs/BaseInput/BaseInput";
import "./Form.scss";

const Form = () => {
  return (
    <form className="form">
      <h3 className="form__title">cardholder name</h3>
      <BaseInput />
      <h3 className="form__title">card number</h3>
      <BaseInput />
      <div className="form__info">
        <>
          <h3 className="form__title">exp. date (mm/yy)</h3>
          <BaseInput />
          <BaseInput />
        </>
        <>
          <h3 className="form__title">cvc</h3>
          <BaseInput />
        </>
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Form;
