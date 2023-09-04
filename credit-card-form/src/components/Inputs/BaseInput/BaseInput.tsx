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
  pattern,
}: IBaseInput<T>) => {
  const classes = `base-input ${inputClass}`;

  return (
    <div>
      {title && (
        <label htmlFor={name} className="base-input__title">
          {title}
        </label>
      )}
      <input
        maxLength={length}
        className={classes}
        placeholder={placeholder}
        {...register(name, {
          required: "Can't be blank",
          minLength: {
            value: length,
            message: `Value should be ${length} chars`,
          },
          pattern: {
            value: pattern || /^\d+$/,
            message: "Wrong format",
          },
        })}
        onChange={onChange}
      />
      {errors[name] && (
        <p role="alert" className="base-input__error">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default BaseInput;
