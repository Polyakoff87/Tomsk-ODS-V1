import { configureStore, combineReducers } from "@reduxjs/toolkit";

import reviewReducer from "../features/reviewSlice";
import adsSliderReducer from "../features/adsSliderSlice";
// import newsSliderReducer from "../features/newsSliderSlice";
// import galleryReducer from "../features/gallerySlice";
import navReducer from "../features/navSlice";
import { rtkApi } from "../api/rtkApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  review: reviewReducer,
  // newsSlider: newsSliderReducer,
  adsSlider: adsSliderReducer,
  // gallery: galleryReducer,
  nav: navReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

setupListeners(store.dispatch);

export default store;
