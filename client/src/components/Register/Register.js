import './register.css'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as UserService from '../../services/UserService';


export const Register = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);

    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });
    const { email, password, repeatPassword } = registerData;
    const onChangeHandler = (e) => {
        setRegisterData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));

    };

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== repeatPassword || email.length < 6 || password.length < 6) {
            console.log(`nope`);
            return
        };

        UserService.register(email, password)
            .then(autData => {
                userLogin(autData);

                if (autData.accessToken) {

                    navigate('/');
                } else {
                    alert(autData.message)
                }

            })
            .catch(() => {
                navigate('/404')
            });
    };

    const inputLengthCheck = e => {
        if (e.target.value.length < 6) {
            setError(state => ({
                ...state,
                [e.target.name]: true
            }));
        } else {
            setError(state => ({
                ...state,
                [e.target.name]: false
            }));
        }
    }

    const passWordsCheck = e => {
        if (password !== repeatPassword) {
            setPasswordMatch(state => ({
                ...state,
                [e.target.name]: true
            }));
        } else {
            setPasswordMatch(state => ({
                ...state,
                [e.target.name]: false
            }));
        }
    }
    return (
        <div className="register-background">
            <form onSubmit={onSubmit} className="register-form">
                <h2 className='MainLabel'>Register</h2>
                <div className='register-inputs'>
                    <div className='register-input'>
                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            id='email'
                            name='email'

                            type="text"
                            placeholder="Enter email"
                            required
                            value={registerData.email}
                            onChange={onChangeHandler}
                            onBlur={inputLengthCheck}
                        />
                        {error.email && <p className='Validation'>Email must be at least 6 symbols!</p>}
                    </div>

                    <div className='register-input'>
                        <label htmlFor="password"><b>Password</b></label>
                        <input
                            id='password'

                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            required
                            value={registerData.password}
                            onChange={onChangeHandler}
                            onBlur={inputLengthCheck}
                        />
                        {error.password && <p className='Validation'>Password must be at least 6 symbols!</p>}
                    </div>

                    <div className='register-input'>
                        <label htmlFor="repeatPassword"><b>Password Again</b></label>
                        <input
                            id='repeatPassword'

                            type="password"
                            placeholder="Repeat your password"
                            name="repeatPassword"
                            required
                            value={registerData.repeatPassword}
                            onChange={onChangeHandler}
                            onBlur={passWordsCheck}
                        />
                        {passwordMatch.repeatPassword && <p className='Validation'>Passwords dont match!</p>}

                    </div>

                    <div className='register-input'>
                        <button className="register-button">REGISTER</button>
                    </div>

                </div>


            </form>
        </div>)
}