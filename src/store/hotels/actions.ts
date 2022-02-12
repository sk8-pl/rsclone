import { HotelsActionsTypes } from "./types";
import { AppThunk, HotelsActions } from "..";

export const getIdByLocation =
  (location: string): AppThunk<HotelsActions> =>
  async (dispatch) => {
    try {
      dispatch({ type: HotelsActionsTypes.LOCATION_LOADED, payload: location });
    } catch (e) {
      console.log(e);
    }
  };

// let response = await new Promise((resolve) => {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.onload = function (e) {
//     resolve(xhr.response);
//   };
//   xhr.onerror = function () {
//     resolve(undefined);
//     console.error("** An error occurred during the XMLHttpRequest");
//   };
//   xhr.send();
// });
function makeRequest(method: string, url: string) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open(method, url);
    xhr.setRequestHeader("x-rapidapi-host", "booking-com.p.rapidapi.com");
    xhr.setRequestHeader(
      "x-rapidapi-key",
      "7236bff4a7mshd8a14e3b145948cp1f762fjsn7dd381b669d7"
    );
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
      });
    };
    xhr.send();
  });
}

// const makeRequest = (url: string) =>
//   new Promise(function (resolve) {
//     const xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;
//     xhr.open("GET", url, true);
//     xhr.onload = function () {
//       console.log(xhr.response);
//       resolve(JSON.parse(xhr.response));
//     };
//     xhr.setRequestHeader("x-rapidapi-host", "booking-com.p.rapidapi.com");
//     xhr.setRequestHeader(
//       "x-rapidapi-key",
//       "7236bff4a7mshd8a14e3b145948cp1f762fjsn7dd381b669d7"
//     );

//     xhr.send();
//   });

export const getHotels =
  (request: any): AppThunk<HotelsActions> =>
  async (dispatch) => {
    dispatch({ type: HotelsActionsTypes.HOTELS_FETCH });
    try {
      makeRequest(
        "GET",
        `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=ru&name=${request.locationId}`
      ).then((data: any) => {
        console.log(JSON.parse(data)[0].dest_id);
        const id = JSON.parse(data)[0].dest_id;
        return makeRequest(
          "GET",
          `https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=${request.checkOutDate}&room_number=1&filter_by_currency=AED&dest_type=city&locale=ru&checkin_date=${request.checkInDate}&adults_number=${request.adultsNum}&order_by=popularity&units=metric&dest_id=${id}&children_number=${request.childNum}&include_adjacency=true`
        ).then((hotelsData: any) => {
          const json = JSON.parse(hotelsData);
          console.log(json);
          dispatch({ type: HotelsActionsTypes.HOTELS_LOADED, payload: json });
        });
      });

      // dispatch(getIdByLocation("Москва")).then((res) => {
      //   console.log(res);
      // });
      // console.log(request);
      // console.log(
      //   `https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=${request.checkOutDate}&room_number=1&filter_by_currency=AED&dest_type=city&locale=en-gb&checkin_date=${request.checkInDate}&adults_number=${request.adultsNum}&order_by=popularity&units=metric&dest_id=${request.locationId}&children_number=${request.childNum}&include_adjacency=true`
      // );
      // const data = null;
      // const xhr = new XMLHttpRequest();
      // xhr.withCredentials = true;
      // xhr.addEventListener("readystatechange", function () {
      //   if (this.readyState === this.DONE) {
      //     const json = JSON.parse(this.responseText);
      //     console.log(json);
      //     dispatch({ type: HotelsActionsTypes.HOTELS_LOADED, payload: json });
      //   }
      // });
      // xhr.open(
      //   "GET",
      //   `https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=${request.checkOutDate}&room_number=1&filter_by_currency=AED&dest_type=city&locale=en-gb&checkin_date=${request.checkInDate}&adults_number=${request.adultsNum}&order_by=popularity&units=metric&dest_id=${request.locationId}&children_number=${request.childNum}&include_adjacency=true`
      // );
      // xhr.setRequestHeader("x-rapidapi-host", "booking-com.p.rapidapi.com");
      // xhr.setRequestHeader(
      //   "x-rapidapi-key",
      //   "7236bff4a7mshd8a14e3b145948cp1f762fjsn7dd381b669d7"
      // );
      // xhr.send(data);
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
  (adultsNum: string): AppThunk<HotelsActions> =>
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
  (childNum: string): AppThunk<HotelsActions> =>
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

// https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=${hotelsData.checkoutDate}&room_number=${hotelsData.roomsNumber}&filter_by_currency=AED&dest_type=city&locale=en-gb&checkin_date=${hotelsData.checkinDate}&adults_number=${hotelsData.adults}&order_by=popularity&units=metric&dest_id=${hotelsData.cityId}&children_number=${hotelsData.children}&include_adjacency=true
