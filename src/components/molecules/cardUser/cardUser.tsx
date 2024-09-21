import "./cardUser.css";
import { DeleteIcon } from "../../../assets/icons/deleteIcon";
import { LocationIcon } from "../../../assets/icons/locationIcon";
import { Button } from "../../atoms/button/button";
import { ProfilePicture } from "../../atoms/profilePicture/profilePicture";

interface ICardUser {
  image: string;
  name: string;
  location: string;
  viewButtons?: boolean;
  onClickDetails?: () => void;
  onClickDelete?: () => void;
}

export const CardUser = ({ image, name, location, viewButtons, onClickDetails, onClickDelete }: ICardUser) => {  
  return (
    <div className="container_card_user">
      <ProfilePicture
        id="proof"
        image={image}
        className="container_card_user_image"
      />
      <div className="container_card_user_info">
        <h3>{name}</h3>
        <div className="container_location">
          <LocationIcon />
          <span>{location}</span>
        </div>
        {viewButtons &&
          <div className="container_buttons">
            <Button onClick={onClickDetails} className="button_details">Detalles</Button>
            <Button onClick={onClickDelete} className="button_delete">
              <DeleteIcon />
            </Button>
          </div>
        }
      </div>
    </div>
  );
};
