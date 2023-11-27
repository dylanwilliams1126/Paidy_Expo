import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Toast from 'react-native-toast-message';

import store, { persistor } from '@stores';
import AppContainer from '@navigations';
import { Loading } from '@components';
import '@utils/warnings';

export default App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppContainer />
                <Loading />
                <Toast />
            </PersistGate>
        </Provider>
    );
};