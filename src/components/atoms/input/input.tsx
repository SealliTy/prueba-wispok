import "./input.css";

interface IInput {
  id: string;
  placeholder: string;
  required?: boolean;
}

export const Input = ({ id, placeholder, required }: IInput) => {
  return (
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      required={required}
      className="input_atomic"
    />
  );
};
