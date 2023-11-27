import React from 'react';
import { useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';

// common constants & functions
import { Colors } from '@utils/constants';

export default Loading = () => {
    const { load } = useSelector(state => state.common);

    return (
        load ? (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color={Colors.green} />
            </View>
        ) : <View />
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.white,
        opacity: 0.5
    },
    indicator: {
        width: 150,
        height: 150
    },
});