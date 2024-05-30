// // // // src/App.js
// // // import React, { useState, useEffect } from 'react';
// // // import { Routes, Route } from 'react-router-dom';
// // // import Navbar from './components/layout/Navbar';
// // // import Sidebar from './components/layout/Sidebar';
// // // import Home from './pages/Home';
// // // import Profile from './pages/Profile';
// // // import NotFound from './pages/NotFound';
// // // import Signup from './components/auth/Signup';
// // // import Login from './components/auth/Login';
// // // import CreatePost from './components/posts/CreatePost';
// // // import PrivateRoute from './utils/PrivateRoute';
// // // import './App.css';
// // // import axios from './utils/axios';

// // // function App() {
// // //   const [posts, setPosts] = useState([]);
// // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // //   const fetchPosts = async () => {
// // //     const response = await axios.get('/posts');
// // //     setPosts(response.data);
// // //   };

// // //   useEffect(() => {
// // //     fetchPosts().then((data) => {
// // //       setPosts(data);
// // //     });
// // //   }, []);

// // //   const openModal = () => {
// // //     setIsModalOpen(true);
// // //   };

// // //   const closeModal = () => {
// // //     setIsModalOpen(false);
// // //   };

// // //   return (
// // //     <div className="App">
// // //       <Navbar onCreatePostClick={openModal} />
// // //       <div className="mainContainer">
// // //         <Sidebar onCreatePostClick={openModal} />
// // //         <div className="content">
// // //           <Routes>
// // //             <Route path="/" element={<PrivateRoute><Home posts={posts} fetchPosts={fetchPosts} /></PrivateRoute>} />
// // //             <Route path="/signup" element={<Signup />} />
// // //             <Route path="/login" element={<Login />} />
// // //             <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
// // //             <Route path="*" element={<NotFound />} />
// // //           </Routes>
// // //         </div>
// // //       </div>
// // //       <CreatePost fetchPosts={fetchPosts} isOpen={isModalOpen} onClose={closeModal} />
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // src/App.js
// // import React, { useState, useEffect } from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import Navbar from './components/layout/Navbar';
// // import Sidebar from './components/layout/Sidebar';
// // import Home from './pages/Home';
// // import Profile from './pages/Profile';
// // import NotFound from './pages/NotFound';
// // import Signup from './components/auth/Signup';
// // import Login from './components/auth/Login';
// // import CreatePost from './components/posts/CreatePost';
// // import PrivateRoute from './utils/PrivateRoute';
// // import './App.css';
// // import axios from './utils/axios';

// // function App() {
// //   const [posts, setPosts] = useState([]);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   const fetchPosts = async () => {
// //     try {
// //       const response = await axios.get('/posts');
// //       return response.data;
// //     } catch (error) {
// //       console.error('Error fetching posts:', error);
// //       return [];
// //     }
// //   };

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       setIsAuthenticated(true);
// //     }
// //     fetchPosts().then((data) => {
// //       setPosts(data);
// //     });
// //   }, []);

// //   const handleLogout = () => {
// //     setIsAuthenticated(false);
// //     localStorage.removeItem('token');
// //     navigate('/login');
// //   };

// //   const openModal = () => {
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <div className="App">
// //       <Navbar onCreatePostClick={openModal} isAuthenticated={isAuthenticated}
// //         onLogout={handleLogout} />
// //       <div className="mainContainer">
// //         <Sidebar onCreatePostClick={openModal} />
// //         <div className="content">
// //           <Routes>
// //           <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}><Home posts={posts} fetchPosts={fetchPosts}/></PrivateRoute>} />
// //             {/* <Route path="/" element={<PrivateRoute><Home posts={posts} fetchPosts={fetchPosts} /></PrivateRoute>} /> */}
// //             <Route path="/signup" element={<Signup />} />
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
// //             <Route path="*" element={<NotFound />} />
// //           </Routes>
// //         </div>
// //       </div>
// //       <CreatePost fetchPosts={fetchPosts} isOpen={isModalOpen} onClose={closeModal} />
// //     </div>
// //   );
// // }

// // export default App;


// // src/App.js
// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
// import Sidebar from './components/layout/Sidebar';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import NotFound from './pages/NotFound';
// import Signup from './components/auth/Signup';
// import Login from './components/auth/Login';
// import CreatePost from './components/posts/CreatePost';
// import PrivateRoute from './utils/PrivateRoute';
// import './App.css';
// import axios from './utils/axios';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('/posts');
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsAuthenticated(true);
//     }
//     fetchPosts().then((data) => {
//       setPosts(data);
//     });
//   }, []);

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     navigate('/');
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="App">
//       <Navbar onCreatePostClick={openModal} isAuthenticated={isAuthenticated} onLogout={handleLogout} />
//       <div className="mainContainer">
//         <Sidebar onCreatePostClick={openModal} />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}><Home posts={posts} fetchPosts={fetchPosts}/></PrivateRoute>} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login onLogin={handleLogin} />} />
//             <Route path="/profile" element={<PrivateRoute isAuthenticated={isAuthenticated}><Profile /></PrivateRoute>} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </div>
//       <CreatePost fetchPosts={fetchPosts} isOpen={isModalOpen} onClose={closeModal} />
//     </div>
//   );
// }

// export default App;
// src/App.js
// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import CreatePost from './components/posts/CreatePost';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';
import axios from './utils/axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/posts');
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Navbar onCreatePostClick={openModal} isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <div className="mainContainer">
        <Sidebar onCreatePostClick={openModal} isAuthenticated={isAuthenticated} />
        <div className="content">
          <Routes>
            <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}><Home posts={posts} fetchPosts={fetchPosts}/></PrivateRoute>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/profile" element={<PrivateRoute isAuthenticated={isAuthenticated}><Profile /></PrivateRoute>} />
            <Route path="/create" element={<PrivateRoute isAuthenticated={isAuthenticated}><CreatePost fetchPosts={fetchPosts} isOpen={isModalOpen} onClose={closeModal} /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <CreatePost fetchPosts={fetchPosts} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;


