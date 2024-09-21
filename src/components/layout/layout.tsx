import "./layout.css";
import { useAppDispatch } from "../../redux/store";
import { handleModalUser } from "../../redux/userSlice";
import { Button } from "../atoms/button/button";

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
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
      <section className="container_section_layout">{children}</section>
    </main>
  );
};
