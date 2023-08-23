import "./BaseInput.scss";

interface IBaseInput {
  type: string;
  inputClass?: string;
  placeholder: string;
  title?: string;
}

const BaseInput = ({ type, inputClass, placeholder, title }: IBaseInput) => {
  const classes = `base-input ${inputClass}`;

  return (
    <>
      {title && <h3 className="base-input__title">{title}</h3>}
      <input
        type={type}
        className={classes}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default BaseInput;
