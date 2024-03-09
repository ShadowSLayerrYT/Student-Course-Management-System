import React, { useState } from 'react';
import './addstudent.css'; // Import the CSS file for styling
import Axios from 'axios';

function AddStudent() {
    const [studentId, setStudentId] = useState('');
    const [studentName, setStudentName] = useState('');
    const [sectionNo, setSectionNo] = useState('');

    const handleSubmit = () => {
        if (studentId && studentName && sectionNo) {
            const url = "http://localhost:5000/addstudent";
            Axios.post(url, {
                studentId: studentId,
                studentName: studentName,
                sectionNo: sectionNo
            })
            .then(res => {
                console.log("Student added successfully:", res.data);
                // Optionally, you can reset the form fields after successful submission
                setStudentId('');
                setStudentName('');
                setSectionNo('');
            })
            .catch(err => {
                console.error("Error adding student:", err);
            });
        } else {
            console.error("Please fill in all fields before submitting.");
        }
    };

    return (
        <div className='add-student-form'>
            <h3>Add Student</h3>
            <input type="text" placeholder="Student ID" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
            <input type="text" placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
            <input type="text" placeholder="Section Number" value={sectionNo} onChange={(e) => setSectionNo(e.target.value)} />
            <button className='submit-button' onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddStudent;
