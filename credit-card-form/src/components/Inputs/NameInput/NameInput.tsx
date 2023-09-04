import { FieldValues } from "react-hook-form";
import { INameInput } from "../../../types";

const NameInput = <T extends FieldValues>({
  name,
  onChange,
  register,
  errors,
}: INameInput<T>) => {
  return (
    <>
      <label htmlFor={name} className="base-input__title">
        cardholder name
      </label>
      <input
        type="text"
        className="base-input"
        placeholder="e.g. Jane Appleseed"
        {...register(name, {
          required: "Can't be blank",
        })}
        onChange={onChange}
      />
      {errors[name] && (
        <p role="alert" className="base-input__error">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </>
  );
};

export default NameInput;
