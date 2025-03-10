import React from "react";
import { useState } from "react";

function Card({ information }) {
    return (
        <div>
            <p>{information}</p>
        </div>
    );
}

export default Card;