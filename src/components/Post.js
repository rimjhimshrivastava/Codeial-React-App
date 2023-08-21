import PropTypes from 'prop-types';
import styles from '../styles/Home.module.css';
// import {Comment} from './';
// import {Link} from 'react-router-dom';


const Post = ({ post}) => {
    return (
        <div className={styles.postWrapper} key={post._id}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img
                src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1391498.jpg&fm=jpg"
                alt="user-pic"
              />
              <div>
                {/* <Link
                  to={{
                    pathname: `/user/${post.user._id}`,
                    state: {
                      user: post.user,
                    },
                  }}
                  className={styles.postAuthor}
                >
                  {post.user.name}
                </Link> */}
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.content}</div>
    
            {/* <div className={styles.postActions}>
              <div className={styles.postLike}>
                <button onClick={handlePostLikeClick}>
                  <img
                    src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                    alt="likes-icon"
                  />
                </button>
                <span>{post.likes.length}</span>
              </div>
    
              <div className={styles.postCommentsIcon}>
                <img
                  src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                  alt="comments-icon"
                />
                <span>{post.comments.length}</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input
                placeholder="Start typing a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={handleAddComment}
              />
            </div>
    
            <div className={styles.postCommentsList}>
              {post.comments.map((comment) => (
                <Comment comment={comment} key={`post-comment-${comment._id}`} />
              ))}
            </div> */}
          </div>
        </div>
      );
}

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;