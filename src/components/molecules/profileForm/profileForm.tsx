import "./profileForm.css";
import { ProfilePicture } from "../../atoms/profilePicture/profilePicture";
import { SelectLabel } from "../selectLabel/selectLabel";

interface IProfileForm {
  idProfile: string;
  idSelect: string;
  placeholder: string;
  label: string;
  image: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const ProfileForm = ({
  idProfile,
  idSelect,
  placeholder,
  label,
  image,
  options,
  onChange
}: IProfileForm) => {
  return (
    <div className="container_profile_form">
      <ProfilePicture id={idProfile} image={image} />
      <SelectLabel
        id={idSelect}
        defaultValue={image}
        label={label}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};
