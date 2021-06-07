import './Signup.css';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Button from './styled-components/Button'

function Signup(props) {

    const [username, setUsername] = useState('');
    const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
    const [submitMsg, setSubmitMsg] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isConfirmPasswordEmpty, setIsConfirmPasswordEmpty] = useState(false);
    const [doPasswordMatch, setDoPasswordMatch] = useState(false);

    const history = useHistory();

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
        e.preventDefault();
        let ok = true;

        if (!username) {
            ok = false;
            setIsUsernameEmpty(true);
        } else {
            setIsUsernameEmpty(false);
        }

        if (props.type !== 'login' && !email) {
            ok = false;
            setIsEmailEmpty(true);
        } else {
            setIsEmailEmpty(false);
        }

        if (!password) {
            ok = false;
            setIsPasswordEmpty(true);
        } else {
            setIsPasswordEmpty(false);
        }

        if (props.type !== 'login' && !confirmPassword) {
            ok = false;
            setIsConfirmPasswordEmpty(true);
        } else {
            setIsConfirmPasswordEmpty(false);
        }

        if (props.type !== 'login' && password !== confirmPassword) {
            ok = false;
            setDoPasswordMatch(true);
        } else {
            setDoPasswordMatch(false);
        }

        if (ok) {
            if (props.type !== 'login') {
                Signup(username, email, password);
            } else {
                Login(username, password);
            }
        }
    };

    const Signup = (username, email, password) => {
        let postData = {
            username: username,
            email : email,
            password: password
        };
        
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        axios.post(
            'https://akademia108.pl/api/social-app/user/signup', 
            postData, 
            axiosConfig)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            setSubmitMsg(`${username} created`);
            setIsSubmitted(true);
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    };

    const Login = (username, password) => {
        let postData = {
            username: username,
            password: password,
            ttl: 3600
        };
        
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        axios.post(
            'https://akademia108.pl/api/social-app/user/login', 
            postData, 
            axiosConfig)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            setSubmitMsg(`${username} logged in`);
            setIsSubmitted(true);
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            localStorage.setItem('jwt_token', res.data.jwt_token);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('ttl', res.data.ttl);

            props.onLogin();

            history.push("/");
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    };

    return (
        <form className="Signup-form" onSubmit={onSignup}>
            <p className={"info " + (isSubmitted ? "visible" : "hidden")}>{submitMsg}</p>
            <p className={"error " + (isUsernameEmpty ? "visible" : "hidden")}>Username can't be empty</p>
            <input type="text" placeholder="username" value={username} onChange={onUsernameChange}/>

            {(props.type !== 'login') ? (
            <>
                <p className={"error " + (isEmailEmpty ? "visible" : "hidden")}>Email can't be empty</p>
                <input type="email" placeholder="email" value={email} onChange={onEmailChange}/>
            </>
            ) : ''}

            <p className={"error " + (isPasswordEmpty ? "visible" : "hidden")}>Password can't be empty</p>
            <input type="password" placeholder="password" value={password} onChange={onPasswordChange}/>

            {(props.type !== 'login') ? (
            <>
                <p className={"error " + (isConfirmPasswordEmpty ? "visible" : "hidden")}>Password can't be empty</p>
                <p className={"error " + (doPasswordMatch ? "visible" : "hidden")}>Passwords don't match</p>
                <input type="password" placeholder="confirm password" value={confirmPassword} onChange={onConfirmPasswordChange}/>
            </>
            ) : ''}

            <Button>Submit</Button>
        </form>
    );
}

export default Signup;