import { Link, NavLink } from 'react-router-dom'
import './header.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export function Header() {
    const { userData } = useContext(AuthContext);

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

    return (

        < nav className='Navigation'>

            <h1 className='goLeft'><Link style={style} to="/" >BIKESHOP</Link></h1>

            {userData.accessToken
                ? <ul className="goRight">
                    <li style={styleUser} to="/">Welcome, {userData.email}!</li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/bikes">Bikes</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/parts">Parts</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/createBikeAd">Upload</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/myads">My-Ads</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/logout">Logout</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/about">About</NavLink></li>


                </ul>
                : <ul className="goRight">
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/bikes">Bikes</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/parts">Parts</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/login">Login</NavLink></li>
                    <li><NavLink className={(link) => (link.isActive ? "on" : "of")} to="/about">About</NavLink></li>
                </ul>
            }
        </nav>
    )
}






