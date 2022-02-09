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

const rootReducer = combineReducers({
  hotelsData: hotelsReducer,
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
