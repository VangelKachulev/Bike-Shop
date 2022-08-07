import './register.css'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as UserService from '../../services/UserService';


export const Register = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);

    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });

    const onChangeHandler = (e) => {
        setRegisterData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));

    };

    const onSubmit = (e) => {
        e.preventDefault()
        const { email, password, repeatPassword } = registerData;
        if (email.length < 6) {
            alert(`Your email must be at least 6 symbols!`);
            return;
        };
        if (password.length < 6) {
            alert(`Your password must be at least 6 symbols!`);
            return;
        };
        if (password !== repeatPassword) {
            alert(`Password don't match!`)
            return;
        };


        UserService.register({ email, password })
            .then(autData => {
                userLogin(autData);
                navigate('/');
            })
            .catch(() => {
                alert(`Something went wrong! Try again!`);
            });
    };
    return (<div className="BackGroundRegisterForm">
        <form onSubmit={onSubmit} className="RegisterForm">
            <h2 className='MainLabel'>Register</h2>
            <div >
                <div className='Blocks'>
                    <label htmlFor="email"><b>Email</b></label>
                    <input
                        id='email'
                        name='email'
                        className="RegisterInput"
                        type="text"
                        placeholder="Enter email"
                        required
                        value={registerData.email}
                        onChange={onChangeHandler}

                    />
                </div>

                <div className='Blocks'>
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        id='password'
                        className="RegisterInput"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                        value={registerData.password}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className='Blocks'>
                    <label htmlFor="repeatPassword"><b>Password Again</b></label>
                    <input
                        id='repeatPassword'
                        className="RegisterInput"
                        type="password"
                        placeholder="Repeat your password"
                        name="repeatPassword"
                        required
                        value={registerData.repeatPassword}
                        onChange={onChangeHandler}

                    />
                </div>

                <div className='Blocks'>
                    <button className="RegisterBtn">REGISTER</button>
                </div>

            </div>


        </form>
    </div>)
}