import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//  } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import reviewReducer from "../features/reviewSlice";
import adsSliderReducer from "../features/adsSliderSlice";
import newsSliderReducer from "../features/newsSliderSlice";
import galleryReducer from "../features/gallerySlice";
import navReducer from "../features/navSlice";

const rootReducer = combineReducers({
  review: reviewReducer,
  newsSlider: newsSliderReducer,
  adsSlider: adsSliderReducer,
  gallery: galleryReducer,
  nav: navReducer,
});

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// export const persistor = persistStore(store);
export default store;

// {
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// }
