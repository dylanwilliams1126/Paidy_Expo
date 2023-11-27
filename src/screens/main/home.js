import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import * as LocalAuthentication from 'expo-local-authentication';

import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native';

// common components, constants & functions
import { Header, Content, List, Add } from '@components';
import { Colors } from '@utils/constants';
import { isLog } from '@utils/functions';
import { commonAction } from '@stores/actions';

import dummy from '@utils/dummy';

export default Home = (props) => {
    const dispatch = useDispatch();

    const [isPermission, setPermission] = useState(false);
    const [isAuthentication, setAuthentication] = useState(false);

    useEffect(() => {
        const checkBiometric = async () => {
            const hasPermission = await LocalAuthentication.hasHardwareAsync();
            setPermission(hasPermission);
        }

        checkBiometric();
    }, []);

    const onMenu = () => {
        isLog('info', 'MENU: COMING SOON!');
        Toast.show({ type: 'info', text1: 'Menu', text2: 'Coming Soon!' });
    }

    const onLoad = () => {
        isLog('info', 'TESTING: LOADING!!!');
        dispatch(commonAction.setLoad(true));
        setTimeout(() => {
            dispatch(commonAction.setLoad(false));
        }, 2000);
    }

    const handleAuthentication = async () => {
        try {
            const { success } = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Authenticate to continue',
            });

            if (success) {
                isLog('success', 'Authentication successful');
                Toast.show({ type: 'success', text1: 'Success', text2: 'Authentication successful!' });
                setAuthentication(true);
            } else {
                isLog('error', 'Authentication failed!');
                Toast.show({ type: 'error', text1: 'Error', text2: 'Authentication failed!' });
                setAuthentication(false);
            }
        } catch (error) {
            isLog('error', `Error during authentication: ${error}`);
        }
    }

    const onAdd = () => {
        handleAuthentication();
    }

    const onDelete = () => {
        handleAuthentication();
    }

    const onEdit = () => {
        handleAuthentication();
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Header
                menu
                mode
                title='TO LIST'
                onMenu={onMenu}
                onTitle={onLoad}
            />
            <Content style={{ padding: 10 }}>
                <List
                    data={dummy}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            </Content>
            <Add onPress={onAdd} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    content: {
        flex: 1
    }
});