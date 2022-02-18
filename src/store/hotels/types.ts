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
export enum HotelsActionsTypes {
  HOTELS_FETCH = "HOTELS_FETCH",
  HOTELS_LOADED = "HOTELS_LOADED",
  LOCATION_LOADED = "LOCATION_LOADED",
}

export type HotelsActions =
  | FetchHotelsAction
  | LoadedHotelsAction
  | LoadedLocationAction;

export interface InitialHotelsState {
  hotels: any;
  locationId: string;
}
