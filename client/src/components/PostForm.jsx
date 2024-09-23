import React, { useEffect, useState } from 'react';
import { createPost, updatePost, getPost } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 

const PostForm = () => {
    const { slug } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState(''); 
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            const fetchPost = async () => {
                const postData = await getPost(slug);
                setTitle(postData.title);
                setContent(postData.content);
                setAuthor(postData.author); 
                setIsEditing(true);
            };
            fetchPost();
        }
    }, [slug]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = { title, content, author }; 

        try {
            let result;
            if (isEditing) {
                result = await updatePost(slug, postData); // Update post
                // Optionally, you might want to set new timestamps from the result
                console.log('Post updated at:', result.updated_at);
            } else {
                result = await createPost(postData); // Create post
            }

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: isEditing ? 'Post updated successfully!' : 'Post created successfully!',
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        } finally {
            navigate('/'); 
        }
    };

    const handleCancel = () => {
        navigate('/'); 
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-xl mt-8 transition-transform transform hover:scale-105">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">{isEditing ? 'Edit Post 😌' : 'New Post 😁'}</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border border-gray-300 p-4 mt-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                className="border border-gray-300 p-4 mt-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
                className="border border-gray-300 p-4 mt-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                rows="8"
                required
            />
            <div className="flex justify-between mt-6">
                <button 
                    type="button" 
                    onClick={handleCancel}
                    className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow hover:bg-gray-400 transition duration-200"
                >
                    Cancel
                </button>
                <button 
                    type="submit" 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-200"
                >
                    {isEditing ? 'Update Post' : 'Create Post'}
                </button>
            </div>
        </form>
    );
};

export default PostForm;
