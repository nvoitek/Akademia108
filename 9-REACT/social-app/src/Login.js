import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Button from './styled-components/Button';

function Login(props) {

    const [username, setUsername] = useState('');
    const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
    const [submitMsg, setSubmitMsg] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    const history = useHistory();

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onLogin = (e) => {
        e.preventDefault();
        let ok = true;

        if (!username) {
            ok = false;
            setIsUsernameEmpty(true);
        } else {
            setIsUsernameEmpty(false);
        }

        if (!password) {
            ok = false;
            setIsPasswordEmpty(true);
        } else {
            setIsPasswordEmpty(false);
        }

        if (ok) {
            login(username, password);
        }
    };

    const login = (loginData) => {
        let postData = {
            username: loginData.username,
            password: loginData.password,
            ttl: 3600
        };

        axios.post(
            'https://akademia108.pl/api/social-app/user/login', 
            postData, 
            axiosConfig)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);

            if (!res.data.error) {
                setSubmitMsg(`${loginData.username} logged in`);
                setIsSubmitted(true);
                setUsername();
                setPassword();
    
                localStorage.setItem('user_data', res.data);

                props.onLogin();
    
                history.push("/");
            } else {
                setSubmitMsg('Unable to login');
                setHasErrors(true);
            }
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
            setSubmitMsg('Unable to login');
            setHasErrors(true);
        });
    };
    
    return (
        <form className="Signup-form" onSubmit={onLogin}>
            <p className={"info " + (isSubmitted ? "visible" : "hidden")}>{submitMsg}</p>
            <p className={"error " + (hasErrors ? "visible" : "hidden")}>{submitMsg}</p>
            <p className={"error " + (isUsernameEmpty ? "visible" : "hidden")}>Username can't be empty</p>
            <input type="text" placeholder="username" value={username} onChange={onUsernameChange}/>

            <p className={"error " + (isPasswordEmpty ? "visible" : "hidden")}>Password can't be empty</p>
            <input type="password" placeholder="password" value={password} onChange={onPasswordChange}/>

            <Button>Submit</Button>
        </form>
    );
}

export default Login;