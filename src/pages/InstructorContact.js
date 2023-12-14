// InstructorContact.js
import React, { useState } from 'react';
import './InstructorContact.css';

const InstructorContact = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [isEmailSent, setEmailSent] = useState(false);

  const instructors = [
    { id: 1, name: 'Micheal Soli DCIT205', email: 'michealsoli@gmail.com' },
    { id: 2, name: 'Addulahi Aziz DCIT203', email: 'adulahiaziz@gmail.com' },
    { id: 3, name: 'P. Boakye-Sekyerehene CBAS210', email: 'PBS@gmail.com' },
    { id: 4, name: 'Mr. Paul Ammah DCIT201', email: 'paulAmmah@gmail.com' },
    { id: 5, name: 'DCOP Samuel Winful DCIT207', email: 'winful@gmail.com' },
    { id: 6, name: 'Benjamin Ghansah DCIT209', email: 'benjamin@gmail.com' },
   
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
