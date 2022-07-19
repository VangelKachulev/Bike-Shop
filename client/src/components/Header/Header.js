import { Link } from 'react-router-dom'
import './header.css';


export function Header() {

    const style = {
        textDecoration: 'none',
        color: 'whitesmoke',


    }


    return (

        <nav>
            <li className='goLeft'><Link style={style} to="/" >Home</Link></li>

            <div className="goRight">
                <li><Link style={style} to="/bikes">Bikes</Link></li>
                <li><Link style={style} to="/parts">Parts</Link></li>
                <li><Link style={style} to="/register">Register</Link></li>
                <li><Link style={style} to="/login">Login</Link></li>
                <li><Link style={style} to="/about">About</Link></li>
            </div>
        </nav>

    




    )

}






