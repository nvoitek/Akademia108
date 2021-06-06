import Post from './Post';

function Feed(props) {
    return (
        <div>
            {(props.posts) ? props.posts.map((item, idx) => {
                return <Post key={item.id} content={item.content} username={item.user.username} avatar_url={item.user.avatar_url}/>
            }) : ''}
        </div>
    );
}

export default Feed;