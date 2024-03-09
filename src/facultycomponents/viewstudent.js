import React, { useState, useEffect } from 'react';
import "./viewstudent.css"
import Axios from 'axios';

function ViewStudents() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = () => {
        const url = "http://localhost:5000/viewstudents";
        Axios.get(url)
            .then(res => {
                setStudents(res.data);
            })
            .catch(err => {
                console.error("Error fetching students:", err);
            });
    };

    return (
        <div className="student-table-container">
            <h2>View Students</h2>
            <table className="animated-table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Section Number</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.studentId}</td>
                            <td>{student.studentName}</td>
                            <td>{student.sectionNo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewStudents;
