import React from "react";
import MenuItem from "./MenuItem";
import roofImage from "../assets/roof.png";
import birriaLandia from "../assets/birria.png";
import halalGuys from "../assets/Halal.png";
import nyDosas from "../assets/dosas.png";
import kingSouvlaki from "../assets/king.png";
import jerkPan from "../assets/jerk_pan.png";
import tong from "../assets/tong.png";
import ling from "../assets/ling.png";
import uncleGussys from "../assets/gussy.png";
import pataconPisao from "../assets/pisao.png";
import momsMono from "../assets/mono.png";
import makinaCafe from "../assets/makina.png";
import mysttikMasala from "../assets/mysttik.png";

const Menu = () => {
    return (
        <div className="menu">
            <img src={roofImage} alt="" />
            <h2>Food Truck Favourites</h2>
            <div className="menu-row">
                <MenuItem 
                    name='Birria-Landia' 
                    location='Mexican' 
                    image={birriaLandia}
                />
                <MenuItem 
                    name='The Halal Guys' 
                    location='Middle Eastern' 
                    image={halalGuys}
                />
                <MenuItem 
                    name='NY Dosas' 
                    location='Vegetarian' 
                    image={nyDosas}
                />
            </div>
            <div className="menu-row">
                <MenuItem 
                    name='Jerk Pan' 
                    location='Jamaican' 
                    image={jerkPan}
                /> 
                <MenuItem 
                    name='Tong' 
                    location='Bangladeshi' 
                    image={tong}
                />         
                <MenuItem 
                    name='King Souvlaki of Astoria' 
                    location='Greek' 
                    image={kingSouvlaki}
                />
            </div>
            <div className="menu-row">
                <MenuItem 
                    name="Ling's Sweet Mini Cakes" 
                    location='Chinese' 
                    image={ling}
                />
                <MenuItem 
                    name="Uncle Gussy's" 
                    location='Greek' 
                    image={uncleGussys}
                />
                <MenuItem 
                    name='Patacon Pisao' 
                    location='Venezuelan' 
                    image={pataconPisao}
                />
            </div>
            <div className="menu-row">
                <MenuItem 
                    name="Mom's Mono" 
                    location='Tibetan' 
                    image={momsMono}
                />
                <MenuItem 
                    name="Makina Cafe" 
                    location='Ethiopian' 
                    image={makinaCafe}
                />
                <MenuItem 
                    name='Mysttik Masala' 
                    location='Indian' 
                    image={mysttikMasala}
                />
            </div>
        </div>
    );
};

export default Menu;