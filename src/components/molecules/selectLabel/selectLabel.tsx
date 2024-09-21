import "./selectLabel.css";
import { Select } from "../../atoms/select/select";

interface ISelectLabel {
  id: string;
  defaultValue: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const SelectLabel = ({
  id,
  defaultValue,
  label,
  placeholder,
  options,
  onChange,
}: ISelectLabel) => {
  return (
    <div className="container_select_label">
      <label className="label_molecule">{label}</label>
      <Select
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};
