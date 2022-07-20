
import './login.css'

export const Login = () => {

    return (
        <form>

            <div className="main">
                <div className='blocks'>
                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required />
                </div>

                <div className='blocks'>
                    <label for="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required />
                </div>

                <div className='blocks'>
                    <button>LOGIN</button>
                </div>

            </div>

        </form>
    )
}