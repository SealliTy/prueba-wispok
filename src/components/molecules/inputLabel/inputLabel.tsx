import './inputLabel.css'
import { Input } from "../../atoms/input/input";

interface IInputLabel {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
}

export const InputLabel = ({ id, label, placeholder, required }: IInputLabel) => {
  return (
    <div className="container_input-label">
      <label className='label_molecule'>{label}</label>
      <Input id={id} placeholder={placeholder} required={required} />
    </div>
  );
};
