import { HotelsActionsTypes } from "./types";
import { AppThunk, HotelsActions } from "..";

const getIdLocation = async (location: string) => {
  const response = await fetch(
    `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=ru&name=${location}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
        "x-rapidapi-key": "7236bff4a7mshd8a14e3b145948cp1f762fjsn7dd381b669d7",
      },
    }
  );
  const result = await response.json();
  return result[0].dest_id;
};

const getHotelsData = async (request: any) => {
  const response = await fetch(
    `https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=${request.checkOutDate}&room_number=1&filter_by_currency=AED&dest_type=city&locale=ru&checkin_date=${request.checkInDate}&adults_number=${request.adultsNum}&order_by=popularity&units=metric&dest_id=${request.locationId}&children_number=${request.childNum}&include_adjacency=true`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
        "x-rapidapi-key": "7236bff4a7mshd8a14e3b145948cp1f762fjsn7dd381b669d7",
      },
    }
  );
  const result = await response.json();
  return result;
};

export const getIdByLocation =
  (location: string): AppThunk<HotelsActions> =>
  async (dispatch) => {
    try {
      dispatch({
        type: HotelsActionsTypes.LOCATION_LOADED,
        payload: location,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getHotels =
  (request: any): AppThunk<HotelsActions> =>
  async (dispatch) => {
    dispatch({ type: HotelsActionsTypes.HOTELS_FETCH });
    try {
      getIdLocation(request.locationId).then((id) =>
        getHotelsData({ ...request, locationId: id }).then((data) => {
          dispatch({ type: HotelsActionsTypes.HOTELS_LOADED, payload: data });
        })
      );
    } catch (e) {}
  };

export const getCheckInDate =
  (checkInDate: string): AppThunk<HotelsActions> =>
  async (dispatch) => {
    try {
      dispatch({
        type: HotelsActionsTypes.CHECKINDATE_LOADED,
        payload: checkInDate,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getCheckOutDate =
  (checkOutDate: string): AppThunk<HotelsActions> =>
  async (dispatch) => {
    try {
      dispatch({
        type: HotelsActionsTypes.CHECKOUTDATE_LOADED,
        payload: checkOutDate,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getAdultsNum =
  (adultsNum: number): AppThunk<HotelsActions> =>
  async (dispatch) => {
    try {
      dispatch({
        type: HotelsActionsTypes.ADULTSNUM_LOADED,
        payload: adultsNum,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getChildNum =
  (childNum: number): AppThunk<HotelsActions> =>
  async (dispatch) => {
    try {
      dispatch({
        type: HotelsActionsTypes.CHILDNUM_LOADED,
        payload: childNum,
      });
    } catch (e) {
      console.log(e);
    }
  };
