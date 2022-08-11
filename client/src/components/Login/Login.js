import * as UserService from '../../services/UserService';
import './login.css';
import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export const Login = () => {

    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        setLoginData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = loginData;

        if (password.length < 6 || email.length < 6) {
            alert(`Username or password are too short!`);
            return
        } else {
            UserService.login({ email, password })
                .then(authData => {

                    userLogin(authData);
                    if (authData.accessToken) {
                        navigate('/');
                    } else {
                        alert(`Email or Password dont match!`)
                    }

                })
                .catch(() => {
                    alert(`Something went wrong.Try again!`)
                    navigate('/404');
                    return
                })
        }

    };
    return (
        <div className="BackgroundLoginForm">
            <form onSubmit={onSubmit} className="LoginForm">

                <div className="LoginMainDiv">
                    <div className='Blocks'>
                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            className="LoginInput"
                            type="text"
                            placeholder="Enter email"
                            name="email"
                            required
                            value={loginData.email}
                            onChange={onChangeHandler}
                        />

                    </div>

                    <div className='Blocks'>
                        <label htmlFor="password"><b>Password</b></label>
                        <input
                            className="LoginInput"
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            required
                            value={loginData.password}
                            onChange={onChangeHandler}

                        />

                    </div>

                    <div className='Blocks'>
                        <button className="Btn">LOGIN</button>
                    </div>

                </div>
                <p className="Field">
                    <span>
                        Need account?

                    </span>
                    <span><Link style={{ color: "black", fontFamily: "fantasy" }} to="/register">SIGN UP</Link> </span>
                </p>

            </form>
        </div>

    )
}


