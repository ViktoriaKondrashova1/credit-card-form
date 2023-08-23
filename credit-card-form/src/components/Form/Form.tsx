import BaseInput from "../Inputs/BaseInput/BaseInput";
import "./Form.scss";

const Form = () => {
  return (
    <form className="form">
      <BaseInput
        type="text"
        title="cardholder name"
        placeholder="e.g. Jane Appleseed"
      />
      <BaseInput
        type="number"
        title="card number"
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <div className="form__info">
        <div>
          <BaseInput
            type="number"
            title="exp. date (mm/yy)"
            inputClass="date-input"
            placeholder="MM"
          />
          <BaseInput type="number" inputClass="date-input" placeholder="YY" />
        </div>
        <div>
          <BaseInput type="number" title="cvc" placeholder="e.g. 123" />
        </div>
      </div>
      <button type="submit" className="form__submit">
        Confirm
      </button>
    </form>
  );
};

export default Form;
