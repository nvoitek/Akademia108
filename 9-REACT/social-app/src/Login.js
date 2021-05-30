import './Login.css';
import {useState} from 'react';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onLogin = (e) => {
        if (!username) {
            e.preventDefault();
        }

        if (!password) {
            e.preventDefault();
        }
    };

    return (
        <form className="Login-form" onSubmit={onLogin}>
            <input type="text" placeholder="username" value={username} onChange={onUsernameChange}/>
            <input type="password" placeholder="password" value={password} onChange={onPasswordChange}/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Login;