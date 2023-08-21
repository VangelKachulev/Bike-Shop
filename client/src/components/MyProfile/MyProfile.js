import { NavLink } from "react-router-dom";

import './MyProfile.css';
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export function MyProfile() {
    const {  userData } = useContext(AuthContext);

    return (
        <ul className="myprofile">
            <h2 className="user-name"> {userData.email}</h2>
            <li><NavLink className='my-profile-items' to="/myads"><i class="fa-solid fa-list"></i>My-Ads</NavLink></li>
            <li><NavLink className='my-profile-items' to="/createBikeAd"><i class="fa-solid fa-upload"></i>Upload</NavLink></li>
            <li><NavLink className='my-profile-items' to="/logout"><i class="fa-solid fa-circle-xmark"></i>Logout</NavLink></li>
        </ul>
    )
}