import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function Post(props) {
    return (
        <div className="Post">
            <q>{props.content}</q>
            <div className="LowerRow">
                <p>{props.username}</p>
                <img src={props.avatar_url} alt={"avatar of " + props.username}></img>
                <FontAwesomeIcon className="Icon" icon={faThumbsUp} />
            </div>
        </div>
    );
}

export default Post;