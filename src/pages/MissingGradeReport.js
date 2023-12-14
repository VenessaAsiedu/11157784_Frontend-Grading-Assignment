// MissingGradeReport.js
import React, { useState } from 'react';
import './MissingGradeReport.css';

const MissingGradeReport = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary logic with the form data here
    // For demonstration purposes, we'll just set a confirmation message
    setSubmitted(true);
  };

  return (
    <div className="missing-grade-report-container">
      <h2>Missing Grade Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Course Name:
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Instructor Name:
          <input
            type="text"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Expected Grade:
          <input
            type="text"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Explanation:
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            required
          ></textarea>
        </label>
        <br />
        <button type="submit">Report</button>
      </form>

      {isSubmitted && (
        <div>
          <p>Form submitted successfully!</p>
          {}
        </div>
      )}
    </div>
  );
};

export default MissingGradeReport;
