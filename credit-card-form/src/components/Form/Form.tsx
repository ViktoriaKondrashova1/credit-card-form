import BaseInput from "../Inputs/BaseInput/BaseInput";
import "./Form.scss";

interface IForm {
  nameChange: (e: React.FormEvent<HTMLInputElement>) => void;
  numberChange: (e: React.FormEvent<HTMLInputElement>) => void;
  monthChange: (e: React.FormEvent<HTMLInputElement>) => void;
  yearChange: (e: React.FormEvent<HTMLInputElement>) => void;
  cvcChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Form = ({
  nameChange,
  numberChange,
  monthChange,
  yearChange,
  cvcChange,
}: IForm) => {
  return (
    <form className="form">
      <BaseInput
        type="text"
        title="cardholder name"
        placeholder="e.g. Jane Appleseed"
        onChange={(e: React.FormEvent<HTMLInputElement>) => nameChange(e)}
      />
      <BaseInput
        type="number"
        title="card number"
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={(e: React.FormEvent<HTMLInputElement>) => numberChange(e)}
      />
      <div className="form__info">
        <div>
          <BaseInput
            type="number"
            title="exp. date (mm/yy)"
            inputClass="date-input"
            placeholder="MM"
            onChange={(e: React.FormEvent<HTMLInputElement>) => monthChange(e)}
          />
          <BaseInput
            type="number"
            inputClass="date-input"
            placeholder="YY"
            onChange={(e: React.FormEvent<HTMLInputElement>) => yearChange(e)}
          />
        </div>
        <div>
          <BaseInput
            type="number"
            title="cvc"
            placeholder="e.g. 123"
            onChange={(e: React.FormEvent<HTMLInputElement>) => cvcChange(e)}
          />
        </div>
      </div>
      <button type="submit" className="form__submit">
        Confirm
      </button>
    </form>
  );
};

export default Form;
