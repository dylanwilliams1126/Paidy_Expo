import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { navOptionHandler } from '@utils/functions';

import { Home } from '@screens';

const StackMain = createStackNavigator();
export default MainStack = () => {
    return (
        <StackMain.Navigator initialRouteName='Home' screenOptions={{ gestureEnabled: false }}>
            <StackMain.Screen name='Home' component={Home} options={navOptionHandler} />
        </StackMain.Navigator>
    );
};