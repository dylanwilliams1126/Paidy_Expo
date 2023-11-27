import React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

// common components, constants & functions
import { Colors } from '@utils/constants';
import { isShort, isCapitalize } from '@utils/functions';

export default Item = (props) => {
    const { mode } = useSelector(state => state.common);

    let swipeBtns = [
        {
            component: (
                <TouchableOpacity
                    style={styles.buttons.detele}
                    onPress={props.onDelete}
                >
                    <Icon type='material' name='delete' size={20} color={Colors.white} />
                </TouchableOpacity>
            ),
            backgroundColor: mode?.backColor
        },
        {
            component: (
                <TouchableOpacity
                    style={styles.buttons.edit}
                    onPress={props.onEdit}
                >
                    <Icon type='material' name='edit' size={20} color={Colors.white} />
                </TouchableOpacity>
            ),
            backgroundColor: mode?.backColor
        }
    ];

    return (
        <View>
            <Swipeout style={{ backgroundColor: mode?.backColor }} right={swipeBtns}>
                <View style={[styles.container, { backgroundColor: mode?.backColor, borderColor: mode?.foreColor }]}>
                    <View style={[styles.type, { backgroundColor: Colors[props.data?.type] }]} />
                    <View style={styles.wrapper}>
                        <View style={styles.header}>
                            <View style={styles.category.content}>
                                <Icon type='material' name='design-services' size={15} color={Colors.gray} />
                                <Text style={styles.category.name}>{props.data?.category?.toUpperCase()}</Text>
                            </View>
                            <View style={styles.status.content}>
                                <View style={[styles.status.dot, { backgroundColor: Colors[props.data?.type] }]} />
                                <Text style={styles.status.name}>{props.data?.type?.toUpperCase()}</Text>
                            </View>
                        </View>
                        <Text style={[styles.title, { color: mode?.foreColor }]}>{isShort(isCapitalize(props.data?.title), 30)}</Text>
                        <View style={styles.footer}>
                            <View style={styles.assign.content}>
                                <Text style={styles.assign.name}>Assign:</Text>
                                <Text style={[styles.assign.name, { color: mode?.foreColor }]}>{props.data?.assign}</Text>
                            </View>
                            <Text style={styles.date}>{props.data?.date}</Text>
                        </View>
                    </View>
                </View>
            </Swipeout>
            <View style={{ height: 15 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
        borderRadius: 5,
    },
    type: {
        width: 5,
        height: '100%',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    wrapper: {
        flex: 1,
        padding: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    category: {
        content: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        name: {
            marginLeft: 5,
            fontSize: 8,
            fontWeight: '500',
            color: Colors.gray
        }
    },
    status: {
        content: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        dot: {
            width: 10,
            height: 10,
            borderRadius: 5
        },
        name: {
            marginLeft: 5,
            fontSize: 8,
            fontWeight: '500',
            color: Colors.gray
        }
    },
    title: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    assign: {
        content: {
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        name: {
            marginLeft: 5,
            fontSize: 8,
            fontWeight: '500',
            color: Colors.gray
        }
    },
    date: {
        fontSize: 8,
        fontWeight: '500',
        color: Colors.gray
    },
    buttons: {
        detele: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            borderRadius: 5,
            backgroundColor: Colors.red
        },
        edit: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            borderRadius: 5,
            backgroundColor: Colors.green
        }
    }
});