import { Link, NavLink } from 'react-router-dom'
import './header.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { MyProfile } from '../MyProfile/MyProfile';

export function Header() {
    const { token } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    
    return (

        <nav className='header'>

            <a className='logo' href='/'> BIKESHOP</a >


            {token ?
                <ul className="nav">
                    <li onClick={() => { setOpen(false) }}><NavLink className={(link) => (link.isActive ? "on" : "of")} to='/bikes'>Bikes</NavLink ></li>
                    <li onClick={() => { setOpen(false) }}><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/parts">Parts</NavLink></li>
                    <li onClick={() => { setOpen(false) }}><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/createBikeAd">Upload</NavLink></li>
                    <li onClick={() => { setOpen(false) }}><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/myads">My-Ads</NavLink></li>
                    <li onClick={() => { setOpen(false) }}><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/logout">Logout</NavLink></li>
                    <li onClick={() => { setOpen(!open) }}><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/about">About</NavLink></li>
                    <li onClick={() => {setOpen(true) }}><NavLink onClick={(e)=>e.preventDefault()} className={(link) => (link.isActive ? "on" : "of")} to="">My Profile</NavLink></li>
                    <li className={`dropdown ${open ? 'active' : 'inactive'}`}>
                        <ul>
                            <MyProfile />
                        </ul>
                    </li>

                </ul>

                : <ul className="nav">

                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to='/bikes'>Bikes</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/parts">Parts</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/login">Login</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/about">About</NavLink></li>
                </ul>
            }
        </nav>
    )
}






