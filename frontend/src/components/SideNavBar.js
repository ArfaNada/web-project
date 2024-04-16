// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Container, Nav, Image } from 'react-bootstrap';
// import './SideNavBar.css'; 

// function SideNavBar() {
//   //const [isHovered, setHover] = useState(false);

//   return (
//     <div className="side-nav-container">
//                   <Navbar>
//                     <Container style={{ display: 'flex', flexDirection: 'column' }}>
//                         <Navbar.Brand href="#home" className="nav-brand">
//                           Hello Nada!
//                         </Navbar.Brand>

//                         <Image
//                           className="profile-image"
//                           src="https://cdn-icons-png.flaticon.com/512/3449/3449633.png"
//                           roundedCircle
//                         />
                      
//                         <Nav className="me-auto" style={{ display: 'flex', flexDirection: 'column' }}>
//                           <Link to="/lookfortutor" className="nav-link">
//                             Look for Tutor
//                           </Link>
//                           <Link to="/makeappointment" className="nav-link">
//                             Make Appointment Request
//                           </Link>
//                           <Link to="/ratetutor" className="nav-link">
//                             Rate a Tutor
//                           </Link>
//                           <Link to="/tutoringreqapplication" className="nav-link">
//                             Tutoring Request Application
//                           </Link>
//                           <Link to="/studentdash" className="nav-link">
//                             My Dashboard
//                           </Link>
//                         </Nav>
                    
//                         <Link to="/switchtotutor" className="nav-link">
//                             <button className="switch-button" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
//                               Switch
//                             </button>
//                         </Link>


//                     </Container>
//                   </Navbar>
//     </div>
//   );
// }

// export default SideNavBar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import axios from 'axios'; // Import axios for making API requests
import './SideNavBar.css';

function SideNavBar() {
  const [isHovered, setHover] = useState(false);
  const [studentName, setStudentName] = useState('Nada'); // Default value

  useEffect(() => {
    // Fetch student data when the component mounts
    const fetchStudentData = async () => {
      try {
        // Replace 'yourApiEndpoint' with the actual endpoint to get student details
        const response = await axios.get('yourApiEndpoint');
        const student = response.data.student;

        // Update the student name in the state
        setStudentName(student.Name); // Assuming 'Name' is the property that stores the student's name
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, []); // Empty dependency array to fetch data only on mount

  return (
    <div className="side-nav-container">
      <Navbar>
        <Container style={{ display: 'flex', flexDirection: 'column' }}>
          <Navbar.Brand href="#home" className="nav-brand">
            Hello {studentName}!
          </Navbar.Brand>

          <Image
            className="profile-image"
            src="https://cdn-icons-png.flaticon.com/512/3449/3449633.png"
            roundedCircle
          />

          <Nav className="me-auto" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* ... (rest of the links) */}
          </Nav>

          <Link to="/switchtotutor" className="nav-link">
            <button className="switch-button" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
              Switch
            </button>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default SideNavBar;



