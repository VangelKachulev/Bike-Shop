import { NavLink } from "react-router-dom";

import './MyProfile.css';

export function MyProfile() {


    return (
        <ul className="myprofile">
            <li><NavLink to="/myads">My-Ads</NavLink></li>
            <li><NavLink to="/createBikeAd">Upload</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
        </ul>
    )
}