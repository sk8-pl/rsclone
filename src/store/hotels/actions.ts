import { HotelsActionsTypes } from "./types";
import { AppThunk, HotelsActions } from "..";

export const getIdByLocation =
  (location: string): AppThunk<HotelsActions> =>
  async (dispatch) => {
    try {
      const id = location;
      dispatch({ type: HotelsActionsTypes.LOCATION_LOADED, payload: id });
    } catch (e) {
      console.log(e);
    }
  };

export const getHotels =
  (request: any): AppThunk<HotelsActions> =>
  async (dispatch) => {
    dispatch({ type: HotelsActionsTypes.HOTELS_FETCH });
    try {
      dispatch(getIdByLocation("123"));
      const response = await fetch("hotels.json");
      const json = await response.json();
      dispatch({ type: HotelsActionsTypes.HOTELS_LOADED, payload: json });
    } catch (e) {}
  };
