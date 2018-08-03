import React from 'react';

const wrapper = (props) => {

    return (
        <div className={props.classes}>
            {props.children}
        </div>
    );
}

export default wrapper;