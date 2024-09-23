import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/posts/:slug" element={<PostDetail />} />
                <Route path="/new" element={<PostForm />} />
                <Route path="/edit/:slug" element={<PostForm />} />
            </Routes>
        </Router>
    );
};

export default App;
