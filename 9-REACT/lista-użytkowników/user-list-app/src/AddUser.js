import './AddUser.css'

function AddUser(props) {
    return (
        <div className="AddUser">
            <input type="text" placeholder="Enter name" onChange={props.onUserNameChanged} value={props.userName}></input>
            <button onClick={props.onAddUser}>Add user</button>
        </div>
    );
}

export default AddUser;