import types from '@stores/types/common';
import { Themes } from '@utils/constants';

const initialState = {
    load: false,
    mode: Themes.LIGHT
};

export default function commonReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_LOAD:
            return {
                ...state,
                load: action.payload,
            };
        case types.SET_MODE:
            return {
                ...state,
                mode: action.payload,
            };
        default:
            return state;
    }
};