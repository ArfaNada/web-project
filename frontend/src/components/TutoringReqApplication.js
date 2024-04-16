import React, { useState } from 'react';
import './MakeAppointment';
import SideNavBar from './SideNavBar';
import axios from 'axios';

const TutoringReqApplication = () => {
  const [subject, setSubject] = useState('');
  const [subjectGrade, setSubjectGrade] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:6005/api/applications",{
        subjectName: subject,
        subjectGrade,
      });

      // Reset the form
      setSubject('');
      setSubjectGrade('');

      setShowToast(true);

      // Hide the toast after a few seconds
      setTimeout(() => setShowToast(false), 3000);

      console.log('Application submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div>
      <nav>
        <SideNavBar />
      </nav>
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h2>
            Welcome!<br />
            <span>Send your request now</span>
          </h2>

          <div className="input-box">
            <label className="sub_title" htmlFor="subjectGrade">
              Subject name
            </label>
            <input
              placeholder="Enter your subject grade"
              className="form_style"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <i className='bx bxs-user'></i>
          </div>

          <div className="input-box">
            <label className="sub_title" htmlFor="subjectGrade">
              Subject grade
            </label>
            <input
              placeholder="Enter your subject grade"
              className="form_style"
              type="text"
              value={subjectGrade}
              onChange={(e) => setSubjectGrade(e.target.value)}
            />
            <i className='bx bxs-user'></i>
          </div>

          <div>
            <button className="btn" type="submit">
              APPLY
            </button>
          </div>
        </form>

        {/* Toast */}
        {showToast && (
          <div className="toast">
            Application submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default TutoringReqApplication;
