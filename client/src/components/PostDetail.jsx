import React, { useEffect, useState } from 'react';
import { getPost, deletePost } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const data = await getPost(slug);
            // Update created_at with updated_at if available
            if (data.updated_at) {
                data.created_at = data.updated_at; // Set created_at to updated_at
            }
            setPost(data);
        };
        fetchPost();
    }, [slug]);

    const handleDelete = async () => {
        await deletePost(slug);
        navigate('/');
    };

    if (!post) return <div className="text-center">Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
            <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
            <p className="mt-4 text-gray-700 text-lg">{post.content}</p>
            <p className="mt-2 text-gray-500 text-sm">
                Created at: {new Date(post.created_at).toLocaleString()}
            </p>
            <button 
                onClick={handleDelete} 
                className="bg-red-500 text-white mt-6 px-4 py-2 rounded hover:bg-red-600 transition duration-200"
            >
                Delete
            </button>
            <button 
                onClick={() => navigate(-1)} 
                className="bg-gray-300 text-gray-800 mt-2 ml-4 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
            >
                Go Back
            </button>
        </div>
    );
};

export default PostDetail;
