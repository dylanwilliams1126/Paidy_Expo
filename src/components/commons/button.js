import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
    TouchableOpacity,
    Text
} from 'react-native';

// common constants & functions
import { Colors } from '@utils/constants';

export default Button = (props) => {
    return (
        <TouchableOpacity
            style={[
                props.top && {
                    position: 'absolute',
                    top: props.top
                },
                props.bottom && {
                    position: 'absolute',
                    bottom: props.bottom
                },
                props.margin && {
                    marginTop: props.margin
                },
                props.outline && {
                    borderWidth: 1.5,
                    borderColor: props.borderColor || Colors.primary
                },
                {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: props.width || '100%',
                    height: props.height || 50,
                    borderRadius: props.borderRadius || 25,
                    shadowColor: Colors.black,
                    shadowOffset: { width: 1, height: 1 },
                    shadowRadius: 1,
                    elevation: 5
                },
            ]}
            disabled={props.disabled}
            onPress={props.onPress}
            activeOpacity={0.5}
        >
            {!props.outline && (
                <LinearGradient
                    start={{ x: 0.1, y: 0.5 }} end={{ x: 0.8, y: 1.0 }}
                    colors={[props.oneColor || Colors.primary, props.twoColor || Colors.primary]}
                    style={{
                        position: 'absolute',
                        width: props.width || '100%',
                        height: props.height || 50,
                        borderRadius: props.borderRadius || 25,
                        borderWidth: 1.5,
                        borderColor: Colors.white,
                        opacity: 0.7
                    }}
                />
            )}
            <Text style={{
                fontSize: props.fontSize || 20,
                fontWeight: props.weight || '600',
                color: props.foreColor || Colors.white
            }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};