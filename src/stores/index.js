import { legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers';

const peresistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: null,
    whitelist: [''],
    blacklist: ['common'],
};

const persistedReducer = persistReducer(peresistConfig, rootReducer);
const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;