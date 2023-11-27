import { LogBox } from 'react-native';

if (__DEV__) {
    const ignoreWarns = [
        'AsyncStorage has been extracted from react-native',
        'exported from \'deprecated-react-native-prop-types\'.',
        'Non-serializable values were found in the navigation state.',
        'VirtualizedLists should never be nested inside plain ScrollViews',
        'Warning: componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.',
        'Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.',
        '[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!',
        'ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the \'deprecated-react-native-prop-types\' package.',
    ];

    const warn = console.warn;
    console.warn = (...arg) => {
        for (const warning of ignoreWarns) {
            if (arg[0].startsWith(warning)) {
                return;
            }
        }
        warn(...arg);
    };

    LogBox.ignoreLogs(ignoreWarns);
    LogBox.ignoreAllLogs(true);
}