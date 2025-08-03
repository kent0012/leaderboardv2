import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/NotFoundPage.css';

const NotFoundPage: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="not-found-link">Go to Home Page</Link>
        </div>
    );
};

export default NotFoundPage;