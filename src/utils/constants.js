export const API_BASE_URL = 'https://api.example.com';

const Colors = {
    light: '#DFE4FB',
    dark: '#171817',

    primary: '#007AFF',
    secondary: '#FF00F9',

    open: '#00BFC2',
    progress: '#CCCC00',
    accepted: '#0026C2',
    solved: '#4FC200',
    hold: '#708090',

    black: 'black',
    white: 'white',
    red: 'red',
    blue: 'blue',
    green: 'green',
    yellow: 'yellow',
    gray: 'gray',
    pink: 'pink',
    orange: 'orange',
    magenta: 'magenta',
};

const Themes = {
    LIGHT: {
        index: 1,
        name: 'LIGHT',
        backColor: '#DFE4FB',
        foreColor: '#171817',
    },
    DARK: {
        index: 2,
        name: 'DARK',
        backColor: '#171817',
        foreColor: '#DFE4FB',
    }
}

const Fonts = {
    primary: 'Admiration-Pains',
};

const Icons = {
    loading: require('@assets/icons/loading.gif'),
};

const Images = {
    logo: require('@assets/images/logo.png'),
}

export {
    Themes,
    Colors,
    Fonts,
    Images,
    Icons,
};