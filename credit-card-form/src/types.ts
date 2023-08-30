import {
  FieldErrors,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

export interface INameInput<T extends FieldValues> {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  name: Path<T>;
}

export interface IBaseInput<T extends FieldValues> {
  inputClass?: string;
  placeholder: string;
  title?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  length: number;
  name: Path<T>;
}

export interface IForm {
  nameChange: (e: React.FormEvent<HTMLInputElement>) => void;
  numberChange: (e: React.FormEvent<HTMLInputElement>) => void;
  monthChange: (e: React.FormEvent<HTMLInputElement>) => void;
  yearChange: (e: React.FormEvent<HTMLInputElement>) => void;
  cvcChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface IFormInputs {
  name: string;
  number: number;
  month: number;
  year: number;
  cvc: number;
}

export interface ICardBack {
  cvc: string;
}

export interface ICardFront {
  number: string;
  name: string;
  month: string;
  year: string;
}
