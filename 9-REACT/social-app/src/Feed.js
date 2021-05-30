import Post from './Post';

function Feed(props) {
    return (
        <div>
            {(props.posts) ? props.posts.map((item, idx) => {
                return <Post key={idx} content={item}/>
            }) : ''}
        </div>
    );
}

export default Feed;