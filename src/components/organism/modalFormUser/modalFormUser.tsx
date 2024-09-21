import "./modalForm.css";
import { Button } from "../../atoms/button/button";
import { InputLabel } from "../../molecules/inputLabel/inputLabel";
import { ProfileForm } from "../../molecules/profileForm/profileForm";
import { Modal } from "../../atoms/modal/modal";
import {
  handleModalUser,
  handleModalUserSubmit,
  handleSelectedAvatar,
} from "../../../redux/userSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import map from '../../../assets/map.png';

export const ModalFormUser = () => {
  const dispatch = useAppDispatch();
  const { modal, selectedAvatar, optionsAvatar } = useAppSelector(
    (state) => state.counter
  );

  return (
    <Modal isOpen={modal} buttonClose onClose={() => dispatch(handleModalUser())}>
      <form onSubmit={(values) => dispatch(handleModalUserSubmit(values))}>
        <div className="container_modal_user">
          <div className="modal_content_form_user">
            <h3 className="headline_3">Añadir un nuevo usuario</h3>
            <ProfileForm
              idSelect="avatar_select"
              idProfile=""
              placeholder=""
              label="Selecciona tu avatar"
              image={selectedAvatar}
              options={optionsAvatar}
              onChange={(value) => dispatch(handleSelectedAvatar(value))}
            />
            <InputLabel
              id="userName"
              label="Usuario"
              placeholder="Nombre de usuario"
              required
            />
            <div className="container_coordinates">
              <InputLabel
                id="lat"
                label="Latitud"
                placeholder="Ingresa tu latitud"
                required
              />
              <InputLabel
                id="long"
                label="Longitud"
                placeholder="Ingresa tu longitud"
                required
              />
            </div>
            <Button type="submit" className="button_submit_user">
              Añadir usuario
            </Button>
          </div>
          <img src={map} alt="mapa" className="container_img_map" />
        </div>
      </form>
    </Modal>
  );
};
