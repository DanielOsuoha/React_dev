import React from "react";

const MenuItem = ({ name, location, image, btn_link }) => {
    return (
        <div className="menu-item">
            <img src={image} alt={`${name} food truck`} />
            <h3>{name}</h3>
            <p>{location}</p>
            <a href={btn_link}>
                <button>View Menu</button>
            </a>
        </div>
    );
};

export default MenuItem;