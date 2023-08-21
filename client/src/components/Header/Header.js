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
                    <li onClick={() => { setOpen(false) }}><NavLink className="of" to='/bikes'>Bikes</NavLink ></li>
                    <li onClick={() => { setOpen(false) }}><NavLink className="of" to="/parts">Parts</NavLink></li>

                    <li onClick={() => { setOpen(false) }}><NavLink className="of" to="/about">About</NavLink></li>
                    <li onClick={() => { setOpen(!open) }}><NavLink onClick={(e) => e.preventDefault()} className="of" to="">My Profile</NavLink></li>
                    <li className={`dropdown ${open ? 'active' : 'inactive'}`}>

                        <MyProfile />

                    </li>

                </ul>

                : <ul className="nav">

                    <li><NavLink className="of" to='/bikes'>Bikes</NavLink></li>
                    <li><NavLink className="of" to="/parts">Parts</NavLink></li>
                    <li><NavLink className="of" to="/login">Login</NavLink></li>
                    <li><NavLink className="of" to="/about">About</NavLink></li>
                </ul>
            }
        </nav>
    )
}






