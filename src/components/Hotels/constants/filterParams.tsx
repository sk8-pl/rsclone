import { Price } from "../components/Prices/index";
import { Guests } from "../components/Guests/index";
import { DateLeave } from "../components/Dates/DateLeave";
import { DateArrive } from "../components/Dates/DateArrive";
import { Rules } from "../components/Rules";
import { Comfortables } from "../components/Comfortables";

export const filterComponents = [
  <DateArrive />,
  <DateLeave />,
  <Guests />,
  <Price />,
  <Rules />,
  <Comfortables />,
];

export const roomSelect = ["спальни", "кровати", "ванные комнаты"];

export const guestSelect = ["взрослые", "дети", "младенцы"];
