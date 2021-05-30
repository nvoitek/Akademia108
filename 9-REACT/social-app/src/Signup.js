import './Signup.css';
import {useState} from 'react';

function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const onSignup = (e) => {
        if (!username) {
            e.preventDefault();
        }

        if (!email) {
            e.preventDefault();
        }

        if (!password) {
            e.preventDefault();
        }

        if (!confirmPassword) {
            e.preventDefault();
        }
    };

    return (
        <form className="Signup-form" onSubmit={onSignup}>
            <input type="text" placeholder="username" value={username} onChange={onUsernameChange}/>
            <input type="email" placeholder="email" value={email} onChange={onEmailChange}/>
            <input type="password" placeholder="password" value={password} onChange={onPasswordChange}/>
            <input type="password" placeholder="confirm password" value={confirmPassword} onChange={onConfirmPasswordChange}/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Signup;