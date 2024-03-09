// AdminPage.jsx
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './custompage.css'; // Import the custom CSS file

const AdminPage = () => {
  const [redirectToAdminHome, setRedirectToAdminHome] = useState(false);

  const handleEnterAdminModule = () => {
    setRedirectToAdminHome(true);
  };

  if (redirectToAdminHome) {
    return <Navigate to="/adminhome" replace />;
  }

  return (
    <div className="container admin-page"> 
      <h1 className="centered-title">Welcome to the Admin Module</h1>
      <button className="animated-button" onClick={handleEnterAdminModule}>Enter into the Admin module</button>
    </div>
  );
};

export default AdminPage;
