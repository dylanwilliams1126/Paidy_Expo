import React from 'react';
import { Icon } from 'react-native-elements';

import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

// common components, constants & functions
import { Colors } from '@utils/constants';

export default Add = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Icon type='material-community' name='plus-thick' size={20} color={Colors.white} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.primary,
        shadowColor: Colors.black,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.58,
        shadowRadius: 5
    },
});