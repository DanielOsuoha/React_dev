import React from "react";

const MenuItem = (props) => {
    return (
        <div className="menu-item">
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            <button><a href={props.btn_link}></a></button>
        </div>
    );
};

export default MenuItem;