import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';


const rootReducer = combineReducers({ user: userReducer });

const persitstConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persitstConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)