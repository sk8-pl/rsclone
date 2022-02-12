/* eslint-disable @typescript-eslint/default-param-last */
import { HotelsActions, InitialHotelsState, HotelsActionsTypes } from "./types";
const initialState: InitialHotelsState = {
  hotels: [],
  locationId: "",
  checkInDate: "",
  checkOutDate: "",
  adultsNum: "",
  childNum: "",
};

export const hotelsReducer = (
  state = initialState,
  action: HotelsActions
): InitialHotelsState => {
  switch (action.type) {
    case HotelsActionsTypes.HOTELS_FETCH:
      return { ...state };
    case HotelsActionsTypes.HOTELS_LOADED:
      return { ...state, hotels: action.payload.result };
    case HotelsActionsTypes.LOCATION_LOADED:
      return { ...state, locationId: action.payload };
    case HotelsActionsTypes.CHECKINDATE_LOADED:
      return { ...state, checkInDate: action.payload };
    case HotelsActionsTypes.CHECKOUTDATE_LOADED:
      return { ...state, checkOutDate: action.payload };
    case HotelsActionsTypes.ADULTSNUM_LOADED:
      return { ...state, adultsNum: action.payload };
    case HotelsActionsTypes.CHILDNUM_LOADED:
      return { ...state, childNum: action.payload };
    default:
      return state;
  }
};
