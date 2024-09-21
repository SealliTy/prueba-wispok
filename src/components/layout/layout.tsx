import "./layout.css";
import { useAppDispatch } from "../../redux/store";
import { handleModalUser } from "../../redux/userSlice";
import { Button } from "../atoms/button/button";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const dispatch = useAppDispatch();

  return (
    <main>
      <header className="container_header_layout">
        <div>
          <h1>Weather app / Sergio Delgado</h1>
          <Button onClick={() => dispatch(handleModalUser())}>
            Ingresar usuario
          </Button>
        </div>
      </header>
      <section className="container_section_layout">
        <Outlet />
      </section>
    </main>
  );
};
