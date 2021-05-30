import './Signup.css';

function Signup() {
    return (
        <form className="Signup-form">
            <input type="text" placeholder="username"/>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <input type="password" placeholder="confirm password"/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Signup;