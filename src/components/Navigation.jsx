import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/Profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/Translate">Translate</NavLink>
                </li>
            </ul>
        </nav>
    );
}
