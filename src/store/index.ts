import { hotelsReducer } from "./hotels/reducer";
import {
  Action,
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { usersReducer } from "./users/reducer";
import { filtersReducer } from "./filters/reducer";
import { citiesReducer } from "./cities/reducer";

const rootReducer = combineReducers({
  hotelsData: hotelsReducer,
  usersData: usersReducer,
  filtersData: filtersReducer,
  citiesData: citiesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk<Actions extends Action> = ThunkAction<
  Promise<any>,
  AppState,
  unknown,
  Actions
>;
export type AppDispatch = ThunkDispatch<AppState, void, AnyAction>;

export * from "./hotels/actions";
export * from "./hotels/types";
export * from "./filters/types";
export * from "./filters/actions";
