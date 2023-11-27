import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navOptionHandler } from '@utils/functions';

import { Splash } from '@screens';
import MainStack from './stacks/main';

const StackApp = createStackNavigator();
export default AppContainer = () => {
    return (
        <NavigationContainer>
            <StackApp.Navigator initialRouteName='Splash' screenOptions={{ gestureEnabled: false }}>
                <StackApp.Screen name='Splash' component={Splash} options={navOptionHandler} />
                <StackApp.Screen name='MainStack' component={MainStack} options={navOptionHandler} />
            </StackApp.Navigator>
        </NavigationContainer>
    );
};