import './User.css'

function User(props) {
    return (
        <li className="User">
            <p>{props.userName}</p>
            <button onClick={props.onUserDeleted(props.userName)}>X</button>
        </li>
    );
}

export default User;