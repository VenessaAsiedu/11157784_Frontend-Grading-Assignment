
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const gradesData = {
    DCIT201: 85,
    DCIT203: 90,
    DCIT205: null,
    DCIT207: 75,
    DCIT209: 95,
    CBAS210: 88,
  };

  const checkMissingGrades = () => {
    const missingGrades = Object.keys(gradesData).filter(course => gradesData[course] === null);
    return missingGrades;
  };

  const missingGrades = checkMissingGrades();

  return (
    <div>
      <div className='current'><h2>Current Dashboard</h2></div>

      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(gradesData).map(course => (
            <tr key={course}>
              <td>{course}</td>
              <td>{gradesData[course] !== null ? gradesData[course] : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {missingGrades.length > 0 && (
        <div>
          <h3>Alerts/Notifications</h3>
          <p>You have missing grades for the following courses:</p>
          <ul>
            {missingGrades.map(course => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
