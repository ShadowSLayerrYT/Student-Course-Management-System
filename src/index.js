import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StudentHome from './studenthome';
import Login from './login';
import ChangePassword from './components/changepassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './facultycomponents/book';
import MyProfile from './components/myprofile';
import MyCourses from './facultycomponents/viewcourses';
import FacultyTitlePage from './facultypage'; 
import FacultyHome from './facultyhome'
import AdminHome from './adminhome'; 
import AddCourse from './components/addcourse';
import DeleteCourse from './admincomponents/deletecourse'; 
import AddStudent from './facultycomponents/addstudent'; 
import ViewStudents from './facultycomponents/viewstudent';
import ViewFaculty from './admincomponents/viewfaculty';
import StudentPage from './studentpage';
import AdminPage from './adminpage';


function Website() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/studenthome" element={<StudentHome/>} />
        <Route path="/components/changepassword" element={<ChangePassword />} />
        <Route path="/facultyhome" element={<FacultyHome />} />
        <Route path="/facultycomponents/book" element={<Book />} />
        <Route path="/components/myprofile" element={<MyProfile />} />
        <Route path="/facultycomponents/viewcourses" element={<MyCourses />} /> 
        <Route path="/facultypage" element={<FacultyTitlePage />} />
        <Route path="/studentpage" element={<StudentPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/adminhome" element={<AdminHome/>} />
        <Route path="/components/addcourse" element={<AddCourse/>} />
        <Route path="/admincomponents/deletecourse" element={<DeleteCourse />} /> 
        <Route path="/facultycomponents/addstudent" element={<AddStudent />} /> {/* Fix closing tag */}
        <Route path="/facultycomponents/viewstudent" element={<ViewStudents />} /> {/* Fix closing tag */}
        <Route path="/admincomponents/viewfaculty" element={<ViewFaculty />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Website />, document.getElementById('root'));
