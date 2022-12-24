import { Link, NavLink } from 'react-router-dom'
import './header.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export function Header() {
    const { token, userData } = useContext(AuthContext);

    
    return (

        <nav className='header'>

            <a className='logo' href='/'>BIKESHOP</a >

            {token ?
                <ul className="nav">
                    <li><a href='/bikes'>Bikes</a ></li>
                    <li><a href="/parts">Parts</a></li>
                    <li><a href="/createBikeAd">Upload</a></li>
                    <li><a href="/myads">My-Ads</a></li>
                    <li><a href="/logout">Logout</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                : <ul className="nav">

                    <li><a href='/bikes'>Bikes</a ></li>
                    <li><a href="/parts">Parts</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            }
        </nav>
    )
}






