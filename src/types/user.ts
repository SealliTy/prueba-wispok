export interface IUser {
  id: number;
  avatar: string;
  userName: string;
  lat: number;
  long: number;
}

export interface IWeather {
  date: string;
  temp: number;
  place: string;
  weatherName: string;
  humidity: number;
  wind: number;
  visibility: number;
}