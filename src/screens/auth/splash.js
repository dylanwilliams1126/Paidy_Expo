import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    View,
    Text,
    Image
} from 'react-native';

// common components, constants & functions
import { Button } from '@components';
import { Themes, Colors, Images } from '@utils/constants';
import { isLog } from '@utils/functions';
import { commonAction } from '@stores/actions';

export default Splash = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Set Default Theme(Dark/Light)
        dispatch(commonAction.setMode(Themes.LIGHT));
        isLog('info', 'SET LIGHT THEME');
    }, []);

    const onStart = () => {
        isLog('info', 'NAVIGATE: LIST SCREEN');
        props.navigation.replace('MainStack');
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.content}>
                <Image source={Images.logo} style={styles.imageLogo} />
                <Text style={styles.textTitle}>{'Paidy'}</Text>
                <Text style={styles.textWelcome}>{'Welcome to Paidy!'}</Text>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    colors={[Colors.black, Colors.primary]}
                    style={styles.shapeCircle1}
                />
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    colors={[Colors.primary, Colors.white]}
                    style={styles.shapeCircle2}
                />
                <Button
                    title={'GET STARTED'}
                    bottom={100}
                    height={40}
                    fontSize={15}
                    borderRadius={10}
                    onPress={onStart}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    imageLogo: {
        marginTop: -200,
        width: 200,
        height: 200
    },
    textTitle: {
        marginTop: -30,
        fontSize: 40,
        fontWeight: '700',
        color: Colors.white
    },
    textWelcome: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: '500',
        color: Colors.white
    },
    shapeCircle1: {
        position: 'absolute',
        bottom: -wp('110%'),
        right: -wp('120%'),
        width: wp('200%'),
        height: wp('200%'),
        borderRadius: wp('100%'),
        opacity: 0.2
    },
    shapeCircle2: {
        position: 'absolute',
        bottom: -wp('120%'),
        left: -wp('100%'),
        width: wp('180%'),
        height: wp('180%'),
        borderRadius: wp('90%'),
        opacity: 0.5
    },
});