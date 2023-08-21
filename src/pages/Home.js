import styles from '../styles/Home.module.css';
import {Post} from '../components'
import {useEffect, useState} from "react";
import {getPosts} from '../api';
import {Loader} from '../components';


const Home = () =>{
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await getPosts();
      if(response.success){
        setPosts(response.data.posts);
      }
      setLoading(false);
    }
    fetchPosts();
  }, []);


  if(loading){
    return < Loader />;
  }

    return (
    <div className={styles.home}>
      <div className={styles.postsList}>
        {posts.map((post) => (
          <Post 
            post = {post}
            key={`post-${post._id}`}
          />
        ))}
      </div>
    </div>
    )
};

export default Home;