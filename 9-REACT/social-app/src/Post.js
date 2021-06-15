import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import ReactTimeAgo from 'react-time-ago'

function Post(props) {
    return (
        <PostContainer className="Post">
            <Row className="Row">
                <Image src={props.avatar_url} alt={"avatar of " + props.username}></Image>
                <div>
                    <PostHeader className="User">{props.username} <ReactTimeAgo  className="Date" date={props.created_at}/></PostHeader>
                    <PostContent className="Content">{props.content}</PostContent>
                </div>
            </Row>
            <Row className="Row">
                <FontAwesomeIcon className="Icon" icon={faThumbsUp} />
                <FontAwesomeIcon className="Icon" icon={faUserPlus} />
                <FontAwesomeIcon className="Icon" icon={faTimes} />
            </Row>
        </PostContainer>
    );
}

const PostContainer = styled.div`
    border-top: 1px solid grey;
`;

const Row = styled.div`
    display: flex;
    align-items: center;

    .Icon {
        cursor: pointer;
        transition: all 0.3s;
        margin: 15px;
    }

    .Icon:hover {
        color: orange;
    }
`;

const Image = styled.img`
    align-self: flex-start;
    width: 80px;
`;

const PostHeader = styled.p`
    font-weight: 600;
    margin: 15px;
    
    .Date {
        color: gray;
    }
`;

const PostContent = styled.p`
    font-style: italic;
    margin: 15px;
`;

export default Post;