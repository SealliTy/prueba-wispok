import "./weather.css";
import { useEffect } from "react";
import { ArrowLeftIcon } from "../../assets/icons/arrowLeftIcon";
import { Button } from "../../components/atoms/button/button";
import { CardUser } from "../../components/molecules/cardUser/cardUser";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchWeather } from "../../services/user";
import { DropsIcon } from "../../assets/icons/dropsIcon";
import { WindIcon } from "../../assets/icons/windIcon";
import { EyeIcon } from "../../assets/icons/eyeIcon";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handleGetUser, handleVerifyUser } from "../../redux/userSlice";

export const WeatherPage = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedUser, weather, dataUser } = useAppSelector((state) => state.counter);

  useEffect(() => {
    const id = params.get('id')
    console.log('123', id, selectedUser, weather, dataUser);
    
    dispatch(handleVerifyUser(id ? Number(id) : 0))
    if (!dataUser.length) dispatch(handleGetUser())
  }, [])

  useEffect(() => {
    if (selectedUser.id) dispatch(fetchWeather(selectedUser))
  }, [selectedUser])
  
  return (
    <section className="section_weather">
      <div className="container_weather_header">
        <Button className="button_weather_back" onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
          Regresar
        </Button>
        <h3>Pronóstico del tiempo</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur. Maecenas mauris massa magnis
          magna adipiscing proin. Vulputate facilisi ornare blandit eu eleifend
          at.
        </span>
      </div>
      <div className="container_weather_body">
        <div className="container_card_weather">
          <div id="date">{weather.date}</div>
          <div id="temp">{weather.temp} ºC</div>
          <div id="place">{weather.place}</div>
          <div id="weatherName">{weather.weatherName}</div>
          <Button className="button_weather">
            <DropsIcon />
            Humedad
            <span>{weather.humidity}%</span>
          </Button>
          <Button className="button_weather">
            <WindIcon />
            Viento
            <span>{weather.wind} KM/H</span>
          </Button>
          <Button className="button_weather">
            <EyeIcon />
            Visiblidad
            <span>{weather.visibility} km</span>
          </Button>
        </div>
        <CardUser
          image={selectedUser.avatar}
          name={selectedUser.userName}
          location={`${selectedUser.lat}, ${selectedUser.long}`}
        />
      </div>
    </section>
  );
};
