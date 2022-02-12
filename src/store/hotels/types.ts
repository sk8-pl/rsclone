interface FetchHotelsAction {
  type: HotelsActionsTypes.HOTELS_FETCH;
}

interface LoadedHotelsAction {
  type: HotelsActionsTypes.HOTELS_LOADED;
  payload: any;
}

interface LoadedLocationAction {
  type: HotelsActionsTypes.LOCATION_LOADED;
  payload: string;
}

interface LoadedCheckInDateAction {
  type: HotelsActionsTypes.CHECKINDATE_LOADED;
  payload: string;
}

interface LoadedCheckOutDateAction {
  type: HotelsActionsTypes.CHECKOUTDATE_LOADED;
  payload: string;
}

interface LoadedAdultsNumAction {
  type: HotelsActionsTypes.ADULTSNUM_LOADED;
  payload: string;
}

interface LoadedChildNumAction {
  type: HotelsActionsTypes.CHILDNUM_LOADED;
  payload: string;
}
export enum HotelsActionsTypes {
  HOTELS_FETCH = "HOTELS_FETCH",
  HOTELS_LOADED = "HOTELS_LOADED",
  LOCATION_LOADED = "LOCATION_LOADED",
  CHECKINDATE_LOADED = "CHECKINDATE_LOADED",
  CHECKOUTDATE_LOADED = "CHECKOUTDATE_LOADED",
  ADULTSNUM_LOADED = "ADULTSNUM_LOADED",
  CHILDNUM_LOADED = "CHILDNUM_LOADED",
}

export type HotelsActions =
  | FetchHotelsAction
  | LoadedHotelsAction
  | LoadedLocationAction
  | LoadedCheckInDateAction
  | LoadedCheckOutDateAction
  | LoadedAdultsNumAction
  | LoadedChildNumAction;

export interface InitialHotelsState {
  hotels: any;
  locationId: string;
  checkInDate: string;
  checkOutDate: string;
  adultsNum: string;
  childNum: string;
}
