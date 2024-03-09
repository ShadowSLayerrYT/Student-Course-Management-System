import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './custompage.css';

const FacultyPage = () => {
  const [redirectToFacultyHome, setRedirectToFacultyHome] = useState(false);

  const handleEnterFacultyModule = () => {
    setRedirectToFacultyHome(true);
  };

  if (redirectToFacultyHome) {
    return <Navigate to="/facultyhome" replace />;
  }

  return (
    <div className="container faculty-page">
      <h1 className="centered-title">Welcome to the Faculty Module</h1>
      <button className="animated-button" onClick={handleEnterFacultyModule}>Enter into the Faculty module</button>
    </div>
  );
};

export default FacultyPage;
