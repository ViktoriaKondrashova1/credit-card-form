import "./BaseInput.scss";

interface IBaseInput {
  type: string;
  inputClass?: string;
  placeholder: string;
  title?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const BaseInput = ({
  type,
  inputClass,
  placeholder,
  title,
  onChange,
}: IBaseInput) => {
  const classes = `base-input ${inputClass}`;

  return (
    <>
      {title && <h3 className="base-input__title">{title}</h3>}
      <input
        type={type}
        className={classes}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </>
  );
};

export default BaseInput;
