import React from 'react';
import { useSelector } from 'react-redux';

import {
    StyleSheet,
    ScrollView,
    View
} from 'react-native';

export default Content = (props) => {
    const { mode } = useSelector(state => state.common);

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: mode?.backColor
                },
                props.style
            ]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 20 }}
            >
                {props.children}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});