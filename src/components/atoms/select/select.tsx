import "./select.css";

interface ISelect {
  id: string;
  defaultValue: string;
  placeholder: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const Select = ({
  id,
  defaultValue,
  placeholder,
  options,
  onChange,
}: ISelect) => {
  return (
    <select
      id={id}
      name={id}
      defaultValue={defaultValue}
      className="select_atomic"
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};
