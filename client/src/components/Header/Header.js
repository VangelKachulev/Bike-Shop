import { Link, NavLink } from 'react-router-dom'
import './header.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export function Header() {
    const { token } = useContext(AuthContext);


    return (

        <nav className='header'>

            <a className='logo' href='/'> BIKESHOP</a >


            {token ?
                <ul className="nav">
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/parts">Parts</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to='/bikes'>Bikes</NavLink ></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/createBikeAd">Upload</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/myads">My-Ads</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/logout">Logout</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/about">About</NavLink></li>
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






