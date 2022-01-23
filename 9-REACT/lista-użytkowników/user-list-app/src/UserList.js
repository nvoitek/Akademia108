import './UserList.css'
import User from "./User";

function UserList(props) {

    return (
        <ul className="UserList">
            {props.users ? props.users.map((item, idx) => {
                return <User key={idx} listItemId={idx} userName={item} onUserDeleted={props.onUserDeleted}/>
            }) : ''}
        </ul>
    );
}

export default UserList;