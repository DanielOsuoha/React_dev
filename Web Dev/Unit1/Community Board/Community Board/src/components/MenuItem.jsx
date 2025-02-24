import React from "react";

const MenuItem = ({ name, location, image, btn_link }) => {
    return (
        <div className="menu-item">
            <img src={image} alt={`${name} food truck`} />
            <h3>{name}</h3>
            <h4>{location}</h4>
            <a href={btn_link}>
                <button>View Menu</button>
            </a>
        </div>
    );
};

export default MenuItem;