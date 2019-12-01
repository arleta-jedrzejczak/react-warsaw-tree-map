import React from 'react';

export const Tree = (props) => {
    return (
        <div>
            <span className={'dot'}></span>
            <span className={'marker'}>{props.name}</span>
        </div>
    )
};
