import React from "react";
import MenuItem from "./MenuItem";
import roofImage from "../assets/roof.png";

const Menu = () => {
    return (
        <div className="menu">
            <img src={roofImage} alt="" />
            <h2>Food Truck Favourites</h2>
            <div className="menu-row">

                <MenuItem name='Birria-Landia' location='Mexican'/>
                <MenuItem name='The Halal Guys' location='Middle Eastern'/>
                <MenuItem name='NY Dosas' location='Vegetarian'/>
            </div>
            <div className="menu-row">
                <MenuItem name='Jerk Pan' location='Jamaican'/> 
                <MenuItem name='Tong' location='Bangladeshi'/>         
                <MenuItem name='King Souvlaki of Astoria' location='Greek'/>
            </div>
            <div className="menu-row">
                <MenuItem name="Ling's Sweet Mini Cakes" location='Chinese'/>
                <MenuItem name="Uncle Gussy's" location='Greek'/>
                <MenuItem name='Patacon Pisao' location='Venezuelan'/>
            </div>
            <div className="menu-row">
                <MenuItem name="Mom's Mono" location='Tibetan'/>
                <MenuItem name="Makina Cafe" location='Ethiopian'/>
                <MenuItem name='Mysttik Masala' location='Indian'/>
            </div>
        </div>
    );
};

export default Menu;