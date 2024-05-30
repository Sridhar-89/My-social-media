



// src/pages/Home.js
// import React from 'react';
// import PostList from '../components/posts/PostList';
// import styles from './Home.module.css';

// const Home = ({ posts, fetchPosts }) => {
//   return (
//     <div className={styles.home}>
//       <h1>Posts</h1>
//       <PostList posts={posts} fetchPosts={fetchPosts} />
//     </div>
//   );
// };

// export default Home;

// src/pages/Home.js
import React from 'react';
import PostList from '../components/posts/PostList';
import styles from './Home.module.css';
const Home = ({ fetchPosts }) => {
  return (
    <div className={styles.home}>
      <h1>Posts</h1>
      <PostList fetchPosts={fetchPosts} />
    </div>
  );
};

export default Home;


