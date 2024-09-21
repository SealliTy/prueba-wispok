import "./modalDeleteUser.css";
import { Button } from "../../atoms/button/button";
import { Modal } from "../../atoms/modal/modal";
import {
  handleDeleteUser,
  handleModalDeleteUser,
  handleModalUserSubmit,
} from "../../../redux/userSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { CardUser } from "../../molecules/cardUser/cardUser";

export const ModalDeleteUser = () => {
  const dispatch = useAppDispatch();
  const { modalDelete, selectedUser } = useAppSelector(
    (state) => state.counter
  );

  return (
    <Modal isOpen={modalDelete}>
      <form onSubmit={(values) => dispatch(handleModalUserSubmit(values))}>
        <div className="container_modal_delete_user">
          <div className="modal_content_delete_user">
            <h3 className="headline_3">Eliminar usuario</h3>
            <CardUser
              image={selectedUser.avatar}
              name={selectedUser.userName}
              location={`${selectedUser.lat}, ${selectedUser.long}`}
            />
            <div className="container_content_confirm_delete">
              <h5 className="headline_4">¿Deseas eiminar el usuario?</h5>
              <div className="container_delete_user_buttons">
                <Button
                  onClick={() => dispatch(handleDeleteUser(selectedUser.id))}
                >
                  Eliminar usuario
                </Button>
                <Button
                  onClick={() => dispatch(handleModalDeleteUser())}
                  className="button_keep_user"
                >
                  Mantener usuario
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};
