import { Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/user/user";
import { Layout } from "./components/layout/layout";
import { WeatherPage } from "./pages/weather/weather";
import { Error } from "./pages/error/error";

const pathProyect = import.meta.env.BASE_URL;

function Routing() {
  return (
    <Routes>
      <Route
        path={`${pathProyect}`}
        element={
          <Layout>
            <UserPage />
          </Layout>
        }
      />
      <Route
        path={`${pathProyect}weather/:id`}
        element={
          <Layout>
            <WeatherPage />
          </Layout>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Routing;
