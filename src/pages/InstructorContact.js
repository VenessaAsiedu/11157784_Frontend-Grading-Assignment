// InstructorContact.js
import React, { useState } from 'react';
import './InstructorContact.css';

const InstructorContact = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [isEmailSent, setEmailSent] = useState(false);

  const instructors = [
    { id: 1, name: 'Micheal Soli', email: 'michealsoli@example.com' },
    { id: 2, name: 'Adulahi Aziz', email: 'adulahiaziz@example.com' },
    { id: 3, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 4, name: 'Jane Smith', email: 'janesmith@example.com' },
    { id: 5, name: 'Alice Johnson', email: 'alicejohnson@example.com' },
    { id: 6, name: 'Bob Thompson', email: 'bobthompson@example.com' },
    { id: 7, name: 'Eva Davis', email: 'evadavis@example.com' },
    { id: 8, name: 'Samuel Brown', email: 'samuelbrown@example.com' },
  ];

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
    setEmailSubject('');
    setEmailBody('');
    setEmailSent(false);
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    console.log('Simulated Email Sent:', {
      to: selectedInstructor.email,
      subject: emailSubject,
      body: emailBody,
    });
    setEmailSent(true);
  };

  return (
    <div className="instructor-contact-container">
      <h2>Instructor Contact</h2>

      <div className="instructor-list">
        <h3>Instructors</h3>
        <div className="instructor-items">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className={`instructor-item ${selectedInstructor?.id === instructor.id ? 'selected' : ''}`}
              onClick={() => handleInstructorSelect(instructor)}
            >
              <div className="instructor-name">{instructor.name}</div>
              <div className="instructor-email">{instructor.email}</div>
            </div>
          ))}
        </div>
      </div>

      {selectedInstructor && (
        <div className="email-form">
          <h3>Contact {selectedInstructor.name}</h3>
          <form onSubmit={handleEmailSend}>
            <label>
              Subject:
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                required
              />
            </label>
            <label>
              Body:
              <textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                required
              ></textarea>
            </label>
            <button type="submit">Send Email</button>
          </form>

          {isEmailSent && (
            <div>
              <p>Email sent successfully!</p>
              {}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InstructorContact;
