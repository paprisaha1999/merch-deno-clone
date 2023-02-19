import { reducer as cartReducer } from "./cart/cart.reducer";
import { reducer as productReducer } from "./product/product.reducer";
import {
  combineReducers,
  legacy_createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

type DispatchFn = () => AppDispatch;
export const useAppDispatch: DispatchFn = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
