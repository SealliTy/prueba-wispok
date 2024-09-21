import "./user.css";
import { CardUser } from "../../components/molecules/cardUser/cardUser.tsx";
import { ModalFormUser } from "../../components/organism/modalFormUser/modalFormUser.tsx";
import { useAppDispatch, useAppSelector } from "../../redux/store.ts";
import {
  handleGetUser,
  handleModalDeleteUser,
  handleSelectedUser,
} from "../../redux/userSlice.ts";
import { useEffect } from "react";
import { ModalDeleteUser } from "../../components/organism/modalDeleteUser/modalDeleteUser.tsx";
import { useNavigate } from "react-router-dom";

const pathProyect = import.meta.env.BASE_URL

export const UserPage = () => {
  const dispatch = useAppDispatch();
  const { dataUser } = useAppSelector((state) => state.counter);
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(handleGetUser());
  }, []);

  return (
    <section className="section_user">
      <div className="container_user_header">
        <h2>Usuarios registrados</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur. Maecenas mauris massa magnis
          magna adipiscing proin. Vulputate facilisi ornare blandit eu eleifend
          at.
        </span>
      </div>
      <div className="container_card_users">
        {dataUser.map((user) => (
          <CardUser
            key={user.id}
            image={user.avatar}
            name={user.userName}
            location={`${user.lat}, ${user.long}`}
            viewButtons
            onClickDetails={() => {
              dispatch(handleSelectedUser(user));
              navigate(`${pathProyect}weather/${user.id}`)
            }}
            onClickDelete={() => {
              dispatch(handleModalDeleteUser())
              dispatch(handleSelectedUser(user));
            }}
          />
        ))}
      </div>
      <ModalFormUser />
      <ModalDeleteUser />
    </section>
  );
};
