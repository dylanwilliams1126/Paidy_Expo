import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Toast from 'react-native-toast-message';

import store, { persistor } from '@stores';
import AppContainer from '@navigations';
import { Loading } from '@components';

LogBox.ignoreLogs([
    'Warning: ...',
    '[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!',
    'ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the \'deprecated-react-native-prop-types\' package.',
]);
LogBox.ignoreAllLogs(true);

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