import './Login.css';

function Login() {
    return (
        <form className="Login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Login;