import React from 'react';

const Events = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h5>{props.event}</h5>
        </td>
    );
}
export default Events;