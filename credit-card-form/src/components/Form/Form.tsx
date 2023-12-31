import { useForm } from "react-hook-form";
import { IForm, IFormInputs } from "../../types";
import NameInput from "../Inputs/NameInput/NameInput";
import BaseInput from "../Inputs/BaseInput/BaseInput";
import Button from "../Button/Button";
import "./Form.scss";

const Form = ({
  nameChange,
  numberChange,
  monthChange,
  yearChange,
  cvcChange,
  successSubmit,
}: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  return (
    <form className="form" onSubmit={handleSubmit(successSubmit)}>
      <NameInput
        onChange={(e: React.FormEvent<HTMLInputElement>) => nameChange(e)}
        name="name"
        register={register}
        errors={errors}
      />
      <BaseInput
        title="card number"
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={(e: React.FormEvent<HTMLInputElement>) => numberChange(e)}
        name="number"
        length={16}
        register={register}
        errors={errors}
      />
      <div className="form__info">
        <div>
          <label htmlFor="month" className="base-input__title">
            exp. date (mm/yy)
          </label>
          <div className="form__exp-wrap">
            <BaseInput
              inputClass="date-input"
              placeholder="MM"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                monthChange(e)
              }
              name="month"
              length={2}
              register={register}
              errors={errors}
              pattern={/^(?:1[0-2]|0[1-9])$/i}
            />
            <BaseInput
              inputClass="date-input"
              placeholder="YY"
              onChange={(e: React.FormEvent<HTMLInputElement>) => yearChange(e)}
              name="year"
              length={2}
              register={register}
              errors={errors}
              pattern={/^(?:[2-9][3-9])$/i}
            />
          </div>
        </div>
        <div>
          <BaseInput
            title="cvc"
            placeholder="e.g. 123"
            onChange={(e: React.FormEvent<HTMLInputElement>) => cvcChange(e)}
            name="cvc"
            length={3}
            register={register}
            errors={errors}
          />
        </div>
      </div>
      <Button type="submit">Confirm</Button>
    </form>
  );
};

export default Form;
