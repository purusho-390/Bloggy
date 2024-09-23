# Bloggy 🖐️

This is a full-stack Blog Application built with React.js (Vite) and Tailwind CSS for the frontend, and Django for the backend. The application allows users to create, read, update, and delete blog posts.

## Features 😌

- Create, read, update, and delete blog posts
- Rich text editor for writing posts
- Responsive design using Tailwind CSS
- SweetAlert2 notifications for delete and edit actions
- Alerts triggered when content or title is changed before updating posts

## Tech Stack 😎

### Frontend
- **React.js** (with Vite)
- **Tailwind CSS**
- **SweetAlert2** for alerts
- **Fetch** for API requests

### Backend
- **Django** Framework (Python)
- **Django REST Framework** for creating RESTful APIs

## Installation

### Prerequisites

- **Node.js** and **npm** installed on your machine
- **Python 3.x** installed on your machine
- **Django** and **Django REST Framework** installed

### Backend Setup (Django)

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/blog-application.git
    ```

2. Navigate to the `server` directory:
    ```bash
    cd blog-application/server
    ```

3. Create a virtual environment:
    ```bash
    python -m venv venv
    ```

4. Activate the virtual environment:

    - On Windows:
      ```bash
      venv\Scripts\activate
      ```
    - On macOS/Linux:
      ```bash
      source venv/bin/activate
      ```

5. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```

6. Run database migrations:
    ```bash
    python manage.py migrate
    ```

7. Create a superuser:
    ```bash
    python manage.py createsuperuser
    ```

8. Start the Django development server:
    ```bash
    python manage.py runserver
    ```

### Frontend Setup (React.js)

1. Navigate to the `frontend` directory:
    ```bash
    cd ../client
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Visit the backend API at `http://127.0.0.1:8000` (or your preferred port).
2. Access the frontend at `http://127.0.0.1:5173` (or your preferred port).
3. Register or log in to create new blog posts, edit existing ones, or delete posts.
4. SweetAlert2 notifications will be displayed when editing or deleting a post.

## Project Structure


Here’s the correct project structure in markdown format for you to easily copy and paste:

## Project Structure

```
bloggy-application/
├── backend/
│   ├── blog/                 # Django project files
│   ├── blog_app/             # Blog application files
│   └── manage.py             # Django management script
├── requirements.txt          # Python dependencies
├── frontend/
│   ├── src/                  # React components and pages
│   │   ├── assets/           # Static assets (images, icons, etc.)
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Pages for different routes
│   │   └── App.jsx           # Main application component
│   └── main.jsx              # React entry point
├── public/                   # Public assets (favicon, etc.)
│   └── index.html            # Main HTML file for React app
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Vite configuration
└── package.json              # Node.js dependencies
```

## API Endpoints

- `GET /api/posts/` - Retrieve a list of blog posts
- `POST /api/posts/` - Create a new blog post
- `GET /api/posts/:id/` - Retrieve a single post by ID
- `PUT /api/posts/:id/` - Update a blog post
- `DELETE /api/posts/:id/` - Delete a blog post

## Customization

### Tailwind CSS
Tailwind CSS is used to style the frontend. You can customize the design in the `tailwind.config.js` file or by adding custom classes in your components.

### SweetAlert2
SweetAlert2 is used to display confirmation alerts for delete and edit actions. The alert is triggered after making changes to the post's content or title and clicking the update button.


## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## Contact

- Developer: [Purushothaman M](https://github.com/purusho-390)
- Email: purushothaman.mohans@gmail.com

