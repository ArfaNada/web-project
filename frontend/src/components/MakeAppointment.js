

// // MakeAppointment.js
// import React, { useState } from 'react';
// import SideNavBar from './SideNavBar';
// import ('./MakeAppointment.css');

// const MakeAppointment = () => {



//    const [formData, setFormData] = useState({
//      studentName: '',
//      tutorName: '',
//      dateOfSession: '',
//      placeOfSession: '',
//      subject: '',
//    });

//    const handleChange = (e) => {
//      const { name, value } = e.target;
//      setFormData((prevData) => ({
//        ...prevData,
//        [name]: value,
//      }));
//    };



//    const handleSubmit = (e) => {
//      e.preventDefault();
   
//      alert('Form submitted!');
//    };





//   return (

// <div>
// <nav>
//   <SideNavBar/>
// </nav>

//     <div className="wrapper">
//       <form action="">
//         <h2>Welcome!<br /><span>ready to schedule an appointment!</span></h2>


//         <div className="input-box">
//         <label htmlFor="studentName"> Name</label>
//          <input
//            type="text"
//            placeholder="student Name"
//            name="studentName"
//            id="studentName"
//            className="input"
//            value={formData.studentName}
//            onChange={handleChange}
//          />
//           <i className='bx bxs-user'></i>
//         </div>

//         <div className="input-box">
//         <label htmlFor="tutorName">Tutor Name:</label>
//          <input
//            type="text"
//            placeholder="Tutor Name"
//            name="tutorName"
//            id="tutorName"
//            className="input"
//            value={formData.tutorName}
//            onChange={handleChange}
//          />
//           <i className='bx bxs-user'></i>
//         </div>


//         <div className="input-box">
//         <input
//            type="text"
//            placeholder="Subject"
//            name="subject"
//            id="subject"
//            className="input"
//            value={formData.subject}
//            onChange={handleChange}
//         />          
//       <i className='bx bxs-user'></i>
//         </div>


//         <div className="input-box">
//         <label htmlFor="dateOfSession">Date of Session:</label>
//          <input
//            type="date"
//            name="dateOfSession"
//            id="dateOfSession"
//            className="input"
//            value={formData.dateOfSession}
//            onChange={handleChange}
//          />          
//          <i className='bx bxs-user'></i>
//         </div>


//         <div className="input-box">
//         <label htmlFor="placeOfSession">Place of Session:</label>
//          <input
//            type="text"
//            placeholder="Place of Session"
//            name="placeOfSession"
//            id="placeOfSession"
//            className="input"
//            value={formData.placeOfSession}
//            onChange={handleChange}
//          />          <i className='bx bxs-lock-alt'></i>
//         </div>
       
//        <button type="submit" className="btn">Let's go →</button>
        
//       </form>
//     </div>
// </div>
//   );
// };

// export default MakeAppointment;


import React, { useState } from 'react';
import SideNavBar from './SideNavBar';
import axios from 'axios';
import './MakeAppointment.css';

const MakeAppointment = () => {
  const [formData, setFormData] = useState({
    tutorName: '',
    dateOfSession: '',
    placeOfSession: '',
    subject: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/postAppointment', {
        ...formData,
      });

      // Reset the form
      setFormData({
        tutorName: '',
        dateOfSession: '',
        placeOfSession: '',
        subject: '',
      });

      // Show toast
      alert('Form submitted!'); // You can replace this with your toast component or library

      console.log('Appointment created successfully:', response.data);
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div>
      <nav>
        <SideNavBar />
      </nav>

      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2>
            Welcome!<br />
            <span>Ready to schedule an appointment!</span>
          </h2>

          <div className="input-box">
            <label htmlFor="tutorName">Tutor Name:</label>
            <input
              type="text"
              placeholder="Tutor Name"
              name="tutorName"
              id="tutorName"
              className="input"
              value={formData.tutorName}
              onChange={handleChange}
            />
            <i className='bx bxs-user'></i>
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              id="subject"
              className="input"
              value={formData.subject}
              onChange={handleChange}
            />
            <i className='bx bxs-user'></i>
          </div>

          <div className="input-box">
            <label htmlFor="dateOfSession">Date of Session:</label>
            <input
              type="date"
              name="dateOfSession"
              id="dateOfSession"
              className="input"
              value={formData.dateOfSession}
              onChange={handleChange}
            />
            <i className='bx bxs-user'></i>
          </div>

          <div className="input-box">
            <label htmlFor="placeOfSession">Place of Session:</label>
            <input
              type="text"
              placeholder="Place of Session"
              name="placeOfSession"
              id="placeOfSession"
              className="input"
              value={formData.placeOfSession}
              onChange={handleChange}
            />
            <i className='bx bxs-lock-alt'></i>
          </div>

          <button type="submit" className="btn">
            Let's go →
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAppointment;

