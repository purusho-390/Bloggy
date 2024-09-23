const API_URL = "http://127.0.0.1:8000/api/blogs/";

export const getPosts = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return response.json();
};

export const getPost = async (slug) => {
    const response = await fetch(`${API_URL}${slug}/`);
    if (!response.ok) {
        throw new Error("Failed to fetch post");
    }
    return response.json();
};

export const createPost = async (postData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });
    if (!response.ok) {
        throw new Error("Failed to create post");
    }
    return response.json();
};


export const updatePost = async (slug, postData) => {
    const response = await fetch(`${API_URL}${slug}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });
    if (!response.ok) {
        throw new Error("Failed to update post");
    }
    return response.json();
};

export const deletePost = async (slug) => {
    const response = await fetch(`${API_URL}${slug}/`, { method: 'DELETE' });
    if (!response.ok) {
        throw new Error("Failed to delete post");
    }
};
