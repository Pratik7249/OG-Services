Ultimate Courses or Services Website

This project is the Ultimate Site to provide courses or services to customers. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), this platform delivers a seamless user experience for learning and accessing services.

Features

User Features:

Authentication: Secure user login and registration with JWT.

Course/Service Access: Browse courses or services.

Dark Mode: Toggle between light and dark modes for a personalized UI.

Contact Form: Users can send inquiries directly to the admin.

Admin Features:

Admin Dashboard: Manage users, services, and contact inquiries.

Authorization: Restricted access to admin-only pages using middleware.

Toast Notifications: Real-time feedback for actions and errors.

Tech Stack

Frontend:

React.js: Dynamic and responsive user interfaces.

React Router: For navigation and routing.

Toastify: User notifications.

CSS: Custom styling for all components.

Backend:

Node.js: Server-side runtime environment.

Express.js: REST API development.

MongoDB: Database for storing user and service data.

Mongoose: Simplified MongoDB interactions.

Project Structure

project-directory
├── backend
│   ├── models      # MongoDB schemas
│   ├── routes      # API endpoints
│   ├── middlewares # Authentication and error handling
│   └── server.js   # Entry point for the backend
├── frontend
│   ├── components  # Reusable React components
│   ├── layouts     # Admin and user layouts
│   ├── pages       # Individual views (Home, Login, Admin, etc.)
│   ├── store       # Context and state management
│   └── App.js      # Main React app entry point
└── README.md       # Project documentation

Installation

Prerequisites:

Node.js (v16+ recommended)

MongoDB (Local or cloud instance)

Git

Steps:

Clone the repository:

git clone https://github.com/Pratik7249/OG-Services.git

Install dependencies for both frontend and backend:

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

Configure environment variables:

Create a .env file in the backend directory with the following:

PORT=5000
MONGO_URI=<your-mongo-uri>
JWT_SECRET=<your-secret-key>

Start the project:

# Start the backend server
cd backend
npm start

# Start the frontend development server
cd ../frontend
npm run dev

---

## Usage

### For Users:
- Register or login to access the courses and services.
- Navigate through the pages via the navbar.
- Contact the admin for inquiries or support.

### For Admins:
- Login to the admin dashboard.
- Manage users, services, and inquiries.
- Ensure proper role-based authorization is in place.

---

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature

Commit your changes:

git commit -m "Add your message here"

Push to your branch:

git push origin feature/your-feature

Open a pull request on GitHub.
