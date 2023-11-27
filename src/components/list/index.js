import React from 'react';

// common components, constants & functions
import Item from './item';

export default List = (props) => {
    return (
        props.data?.map((item, index) => (
            <Item
                key={`item${index}`}
                data={item}
                onDelete={props.onDelete}
                onEdit={props.onEdit}
            />
        ))
    );
};