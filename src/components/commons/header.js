import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

// common constants & functions
import { Themes, Colors } from '@utils/constants';
import { isLog } from '@utils/functions';
import { commonAction } from '@stores/actions';

export default Header = (props) => {
    const dispatch = useDispatch();
    const { mode } = useSelector(state => state.common);

    const onMode = () => {
        // isLog('info', 'CHANGE THEME: DARK/LIGHT MODE');
        if (mode.index === 1) {
            isLog('success', 'SET DARK THEME');
            dispatch(commonAction.setMode(Themes.DARK));
        } else {
            isLog('success', 'SET LIGHT THEME');
            dispatch(commonAction.setMode(Themes.LIGHT));
        }
    };

    return (
        <View style={[
            styles.container,
            {
                backgroundColor: Colors?.primary,
                shadowColor: mode?.foreColor
            }
        ]}>
            {props.left && <View style={styles.buttonIcon} />}

            {props.back &&
                <TouchableOpacity style={styles.buttonIcon} onPress={props.onBack}>
                    <Icon type='material' name='arrow-back' size={25} color={mode?.foreColor} />
                </TouchableOpacity>}

            {props.menu &&
                <TouchableOpacity style={styles.buttonIcon} onPress={props.onMenu}>
                    <Icon type='material-community' name='menu' size={25} color={mode?.foreColor} />
                </TouchableOpacity>}

            {props.title && (
                <TouchableOpacity onPress={props.onTitle}>
                    <Text style={[styles.textTitle, { color: mode?.foreColor }]}>{props.title}</Text>
                </TouchableOpacity>
            )}

            <View style={styles.viewRight}>
                {props.setting &&
                    <TouchableOpacity style={styles.buttonIcon} onPress={props.onSetting}>
                        <Icon type='material' name='settings' size={25} color={mode?.foreColor} />
                    </TouchableOpacity>}
                {props.search &&
                    <TouchableOpacity style={styles.buttonIcon} onPress={props.onSearch}>
                        <Icon type='material' name='search' size={25} color={mode?.foreColor} />
                    </TouchableOpacity>}
                {props.mode &&
                    <TouchableOpacity style={styles.buttonIcon} onPress={onMode}>
                        <Icon type='font-awesome' name={mode.index === 1 ? 'eercast' : 'ravelry'} size={20} color={mode?.foreColor} />
                    </TouchableOpacity>}
                {props.right && <View style={styles.buttonIcon} />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        width: wp('100%'),
        zIndex: 9999
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewRight: {
        flexDirection: 'row',
    },
    buttonIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30
    }
});