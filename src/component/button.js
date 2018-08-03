import React from 'react';

const button = (props) => {

    return (<button onClick={props.onClick}>{props.children}</button>);
}

export default button;