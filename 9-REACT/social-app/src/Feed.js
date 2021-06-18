import Post from './Post';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Feed() {
    const [posts, setPosts] = useState([]);

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + (localStorage.getItem('user_data') !== null ? JSON.parse(localStorage.getItem('user_data')).jwt_token : '')
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        axios.post(
            'https://akademia108.pl/api/social-app/post/latest',
            '',
            axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
                setPosts([...res.data]);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }

    return (
        <div>
            {
                posts.map((item) => {
                    return <Post key={item.id} content={item.content} username={item.user.username} avatar_url={item.user.avatar_url} created_at={item.created_at} />
                })
            }
        </div>
    );
}

export default Feed;