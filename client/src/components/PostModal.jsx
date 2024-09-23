import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 
import Swal from 'sweetalert2'; 

const PostModal = ({ post, onClose, onDelete, onEdit }) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = async () => {
        await onDelete(post.id); 
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Post deleted successfully!',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'swal-custom-popup',
            },
        });
        onClose(); 
    };

    const handleEdit = async () => {
        await onEdit(post.id); // Call the onEdit function passed as a prop
        onClose(); // Close the modal after editing
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
            <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl transform transition-all duration-500 scale-100">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">{post.title}</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-600 transition duration-300 focus:outline-none"
                    >
                        <FaTimes className="text-2xl" /> 
                    </button>
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2"> Author : {post.author}</h3>
                <p className="text-sm text-gray-500 mb-4">
                    Created at: {new Date(post.created_at).toLocaleString()} 
                </p> 
                <p className="text-gray-700 mb-8 leading-relaxed">{post.content}</p> 

                <div className="flex justify-end space-x-4">
                    <button 
                        onClick={() => setShowConfirm(true)} 
                        className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Delete
                    </button>
                    <button 
                        onClick={handleEdit} // Call handleEdit directly here
                        className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Edit
                    </button>
                </div>

                {showConfirm && (
                    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Are you sure you want to delete this post?</h3>
                            <div className="flex justify-end space-x-4">
                                <button 
                                    onClick={() => setShowConfirm(false)} 
                                    className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={handleDelete} 
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostModal;
