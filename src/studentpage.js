// StudentPage.jsx
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './custompage.css'; // Import the custom CSS file

const StudentPage = () => {
  const [redirectToStudentHome, setRedirectToStudentHome] = useState(false);

  const handleEnterStudentModule = () => {
    setRedirectToStudentHome(true);
  };

  if (redirectToStudentHome) {
    return <Navigate to="/studenthome" replace />;
  }

  return (
    <div className="container student-page"> {/* Add 'container' class */}
      <h1 className="centered-title">Welcome to the Student Module</h1>
      <button className="animated-button" onClick={handleEnterStudentModule}>Enter into the Student module</button>
    </div>
  );
};

export default StudentPage;
