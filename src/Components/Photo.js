import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Photo(props){
    const post = props.post
    return (
        <figure className='figure'>
            <Link to={`/single/${post.id}`}><img className='photo' src={post.imageLink} alt={post.description}></img></Link>
            
            <figurecaption><p>{post.description}</p></figurecaption>
            <div className='button-container'>
                <button onClick={() => {
                        props.removePost(props.index)
                        props.history.push('/')
                    }}>Remove</button>
                    <Link className='button' to={`/single/${post.id}`}>
                        <div className='comment-count'>
                            <div className='speech-bubble'></div>
                            {props.comments[post.id] ? props.comments[post.id].length : 0}
                        </div>
                    </Link>
            </div>
        </figure>
    )
}

Photo.propTypes = {
    posts: PropTypes.object.isRequired,

}

export default Photo