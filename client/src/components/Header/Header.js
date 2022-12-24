import { Link, NavLink } from 'react-router-dom'
import './header.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export function Header() {
    const { token, userData } = useContext(AuthContext);

    const style = {
        textDecoration: 'none',
        color: 'whitesmoke',
        fontSize: '40px'

    };
    const styleUser = {
        textDecoration: 'none',
        color: 'whitesmoke',
        textTransform: 'capitalize',
        fontStyle: 'italic',
        fontSize: '28px',
        color: 'yellow'

    };
    console.log(userData.email);
    return (

        <nav className='header'>
         {/* <h1 className='email'>Welcome, {userData.email}!</h1> */}

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






            {/* {token
                ? <ul className="nav">

                    <li style={styleUser} to="/">Welcome, {userData.email}!</li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/bikes">Bikes</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/parts">Parts</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/createBikeAd">Upload</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/myads">My-Ads</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/logout">Logout</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/about">About</NavLink></li>


                </ul>
                : <ul className="nav">
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/bikes">Bikes</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/parts">Parts</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/login">Login</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/about">About</NavLink></li>
                </ul>
            }  */}
        </nav>
    )
}






