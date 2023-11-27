import types from '@stores/types/common';

export default class commonAction {
    static setLoad = (data) => ({
        type: types.SET_LOAD,
        payload: data
    });

    static setMode = (data) => ({
        type: types.SET_MODE,
        payload: data
    });
}