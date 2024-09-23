import React, { useEffect, useState } from 'react';
import { getPosts, deletePost, getPost } from '../api';
import { useNavigate } from 'react-router-dom';
import PostModal from './PostModal';  

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);  
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const handleReadMore = (post) => {
        setSelectedPost(post);  
    };

    const handleDelete = async (id) => {
        await deletePost(id);
        setPosts(posts.filter(post => post.id !== id));  
        setSelectedPost(null);  
    };

    const handleEdit = async (id) => {
        // Fetch the updated post data after editing
        const updatedPost = await getPost(id);
        setPosts(posts.map(post => (post.id === id ? updatedPost : post))); // Update the local state
        setSelectedPost(null);  
        navigate(`/edit/${id}`);  
    };

    const closeModal = () => {
        setSelectedPost(null); 
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-100">
            {posts.map((post) => (
                <div 
                    key={post.id} 
                    className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl relative overflow-hidden cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-blue-300 opacity-10 pointer-events-none"></div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                    <p className="text-sm text-gray-500 mb-4">
                        {new Date(post.created_at).toLocaleString()} | <span className="font-semibold">{post.author}</span> 
                    </p>  

                    <div className="truncate-content text-gray-600 mb-6">
                        <p>{post.content}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <button 
                            onClick={() => handleReadMore(post)}  
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg"
                        >
                            Read More
                        </button>

                        <span className="bg-purple-200 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                            Published
                        </span>
                    </div>
                </div>
            ))}

            {selectedPost && (
                <PostModal 
                    post={selectedPost} 
                    onClose={closeModal} 
                    onDelete={handleDelete} 
                    onEdit={handleEdit} 
                />
            )}
        </div>
    );
};

export default PostList;
