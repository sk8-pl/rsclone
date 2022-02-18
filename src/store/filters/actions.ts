import { getIdLocation } from "./../hotels/actions";
import { AppThunk } from "..";
import { FiltersActions, FiltersActionsTypes } from "./types";

export const getCheckInDate =
  (checkInDate: string): AppThunk<FiltersActions> =>
  async (dispatch) => {
    try {
      dispatch({
        type: FiltersActionsTypes.CHECKINDATE_LOADED,
        payload: checkInDate,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getCheckOutDate =
  (checkOutDate: string): AppThunk<FiltersActions> =>
  async (dispatch) => {
    try {
      dispatch({
        type: FiltersActionsTypes.CHECKOUTDATE_LOADED,
        payload: checkOutDate,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getAdultsNum =
  (adultsNum: number): AppThunk<FiltersActions> =>
  async (dispatch) => {
    try {
      dispatch({
        type: FiltersActionsTypes.ADULTSNUM_LOADED,
        payload: adultsNum,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getChildNum =
  (childNum: number): AppThunk<FiltersActions> =>
  async (dispatch) => {
    try {
      dispatch({
        type: FiltersActionsTypes.CHILDNUM_LOADED,
        payload: childNum,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getCity =
  (city: string): AppThunk<FiltersActions> =>
  async (dispatch) => {
    try {
      dispatch({
        type: FiltersActionsTypes.CITY_LOADED,
        payload: city,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getRooms =
  (rooms: number): AppThunk<FiltersActions> =>
  async (dispatch) => {
    try {
      dispatch({
        type: FiltersActionsTypes.ROOMS_LOADED,
        payload: rooms,
      });
    } catch (e) {
      console.log(e);
    }
  };

const getCategoriesData = async (request: any) => {
  const response = await fetch(
    `https://booking-com.p.rapidapi.com/v1/hotels/search-filters?dest_id=${request.locationId}&adults_number=${request.adultsNum}&filter_by_currency=AED&units=metric&checkout_date=${request.checkOutDate}&order_by=popularity&checkin_date=${request.checkInDate}&dest_type=city&room_number=${request.rooms}&locale=ru&include_adjacency=true&children_number=${request.childNum}`,
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
  return result.filter[5].categories;
};

export const getCategories =
  (request: any): AppThunk<FiltersActions> =>
  async (dispatch) => {
    try {
      getIdLocation(request.locationId).then((id) => {
        getCategoriesData({ ...request, locationId: id }).then((data) => {
          dispatch({
            type: FiltersActionsTypes.CATEGORIES_LOADED,
            payload: data,
          });
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
