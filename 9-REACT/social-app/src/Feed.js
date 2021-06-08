import Post from './Post';

function Feed(props) {
    return (
        <div>
            { 
                props.posts.map((item, idx) => {
                    return <Post key={item.id} content={item.content} username={item.user.username} avatar_url={item.user.avatar_url} created_at={item.created_at}/>
                })
            }
        </div>
    );
}

export default Feed;