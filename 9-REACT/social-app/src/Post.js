import './Post.css'

function Post(props) {
    return (
        <div className="Post">
            <p>{props.content}</p>
            <p>{props.username}</p>
            <img src={props.avatar_url} alt={"avatar of " + props.username}></img>
        </div>
    );
}

export default Post;