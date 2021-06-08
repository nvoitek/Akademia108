import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

function Post(props) {
    return (
        <div className="Post">
            <div className="Row">
                <img src={props.avatar_url} alt={"avatar of " + props.username}></img>
                <div>
                    <p className="User">{props.username} <span className="Date">{props.created_at}</span></p>
                    <p className="Content">{props.content}</p>
                </div>
            </div>
            <div className="Row">
                <FontAwesomeIcon className="Icon" icon={faThumbsUp} />
                <FontAwesomeIcon className="Icon" icon={faUserPlus} />
                <FontAwesomeIcon className="Icon" icon={faTimes} />
            </div>
        </div>
    );
}

export default Post;