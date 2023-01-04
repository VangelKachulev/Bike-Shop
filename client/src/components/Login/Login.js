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
            UserService.login(email, password)
                .then(authData => {

                    userLogin(authData);
                    if (authData.accessToken) {
                        navigate('/');
                    } else {
                        alert(`Unknown user!`)
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
        <div className="login-background">
            <form onSubmit={onSubmit} className="login-form">

                <div className="login-main-inputs">
                    <div className='inputs'>
                        <label htmlFor="email"><b>Email</b></label>
                        <input

                            type="text"
                            placeholder="Enter email"
                            name="email"
                            required
                            value={loginData.email}
                            onChange={onChangeHandler}
                        />

                    </div>

                    <div className='inputs'>
                        <label htmlFor="password"><b>Password</b></label>
                        <input

                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            required
                            value={loginData.password}
                            onChange={onChangeHandler}

                        />

                    </div>

                    <div className='inputs'>
                        <button className="login-button">LOGIN</button>
                    </div>

                </div>
                <p className="need-account">
                    <span>
                        Need account?

                    </span>
                    <span><Link style={{ color: "black", fontFamily: "fantasy",letterSpacing: "1px" }} to="/register">SIGN UP</Link> </span>
                </p>

            </form>
        </div>

    )
}


