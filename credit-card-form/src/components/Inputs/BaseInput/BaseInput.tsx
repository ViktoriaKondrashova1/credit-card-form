import { FieldValues } from "react-hook-form";
import { IBaseInput } from "../../../types";
import "./BaseInput.scss";

const BaseInput = <T extends FieldValues>({
  name,
  inputClass,
  placeholder,
  title,
  onChange,
  length,
  register,
  errors,
}: IBaseInput<T>) => {
  const classes = `base-input ${inputClass}`;

  return (
    <>
      {title && <h3 className="base-input__title">{title}</h3>}
      <input
        className={classes}
        placeholder={placeholder}
        {...register(name, {
          required: "Can't be blank",
          minLength: {
            value: length,
            message: `Value should be ${length} chars`,
          },
          maxLength: {
            value: length,
            message: `Value should be ${length} chars`,
          },
          validate: (value) =>
            !Number.isNaN(Number(value)) || "Wrong format, numbers only",
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

export default BaseInput;
