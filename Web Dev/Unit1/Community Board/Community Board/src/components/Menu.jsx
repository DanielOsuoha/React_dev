import React from "react";
import MenuItem from "./MenuItem";
import roofImage from "../assets/roof.png";

const Menu = () => {
    return (
        <div className="menu">
            <img src={roofImage} alt="" />
            <h2>Food Truck Favourites</h2>
            <div className="menu-row">
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
            <div className="menu-row">
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
            <div className="menu-row">
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </div>
    );
};

export default Menu;