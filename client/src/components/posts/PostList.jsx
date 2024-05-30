// // src/components/posts/PostList.js
// import React, { useEffect } from 'react';
// import axios from '../../utils/axios';
// import PostItem from './PostItem';
// import 'tailwindcss/tailwind.css';

// const PostList = ({ posts, fetchPosts }) => {
//   useEffect(() => {
//     fetchPosts();
//   }, [fetchPosts]);

//   const handleDelete = (postId) => {
//     setPosts(posts.filter(post => post._id !== postId));
//   };

//   return (
//     <div className="max-w-xl mx-auto">
//       {posts.map((post) => (
//         <PostItem key={post._id} post={post} onDelete={handleDelete} />
//       ))}
//     </div>
//   );
// };

// export default PostList;


// src/components/posts/PostList.js
// src/components/posts/PostList.js
// src/components/posts/PostList.js
import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import 'tailwindcss/tailwind.css';

const PostList = ({ fetchPosts }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, [fetchPosts]);

  const handleDelete = (postId) => {
    setPosts(posts.filter(post => post._id !== postId));
  };

  const handleEdit = (updatedPost) => {
    setPosts(posts.map(post => post._id === updatedPost._id ? updatedPost : post));
  };

  if (!posts.length) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="max-w-xl mx-auto">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default PostList;




