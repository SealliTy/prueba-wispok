import { Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/user/user";
import { Layout } from "./components/layout/layout";
import { WeatherPage } from "./pages/weather/weather";
import { Error } from "./pages/error/error";

const pathProyect = import.meta.env.BASE_URL;

function Routing() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={`${pathProyect}`} element={<UserPage />} />
        <Route path={`${pathProyect}weather`} element={<WeatherPage />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Routing;
