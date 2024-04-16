
// import React from 'react';
// import { Accordion, Button } from 'react-bootstrap';

// export default function Notifications() {
//   return (
//     <div style={{ width: '80%', margin: 'auto', marginTop: '40px' }}>
//       <Accordion>
//         <Accordion.Item eventKey="0">
//           <Accordion.Header
//             style={{
//               backgroundColor: '#0A3056', 
//               color: 'white',
//               fontWeight: 'bold',
//               padding: '10px 10px',
//               borderBottom: '1px solid #e3e3e3',
//               cursor: 'pointer',
//             }}
//           >
//             New notification
//           </Accordion.Header>
//           <Accordion.Body
//             style={{
//               padding: '15px',
//               fontSize: '16px',
//               lineHeight: '1.5',
//               color: '#333',
//               display: 'flex',
//               justifyContent: 'space-between',
//               backgroundColor: '#f2f7fb', 
//             }}
//           >
//             <div>
//               Tutor has Accepted your appointment request
//               <h5 style={{ marginBottom: '10px', color: '#555' }}>Date and Time:</h5>
//               <h5>Place: </h5>
//             </div>
//             <div>
//             <Button style={{
//                   width: '80px',
//                   backgroundColor: '#0A3056',
//                   borderColor: '#0A3056', 
//                 }}
//                 variant="danger">
//                 done
//               </Button >
//             </div>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import axios from 'axios'; // Import Axios

export default function Notifications() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments when the component mounts
    const fetchAppointments = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await axios.get('http://localhost:6005/api/appointments');

        // Set the fetched appointments in state
        setAppointments(response.data.appointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []); // Empty dependency array to fetch data only on mount

  const handleDoneClick = async (appointmentId) => {
    try {
      // Make a PUT request to update the appointment state to 'done'
      await axios.put(`/api/updateAppointmentState/${appointmentId}`, {
        newState: 'done',
      });

      // Remove the completed appointment from the local state
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment.AppointmentID !== appointmentId)
      );
    } catch (error) {
      console.error('Error updating appointment state:', error);
    }
  };

  return (
    <div style={{ width: '80%', margin: 'auto', marginTop: '40px' }}>
      <Accordion>
        {appointments.map((appointment) => (
          <Accordion.Item key={appointment.AppointmentID} eventKey={appointment.AppointmentID.toString()}>
            <Accordion.Header
              style={{
                backgroundColor: '#0A3056',
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 10px',
                borderBottom: '1px solid #e3e3e3',
                cursor: 'pointer',
              }}
            >
              New notification
            </Accordion.Header>
            <Accordion.Body
              style={{
                padding: '15px',
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#333',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#f2f7fb',
              }}
            >
              <div>
                Tutor has Accepted your appointment request
                <h5 style={{ marginBottom: '10px', color: '#555' }}>Date and Time:</h5>
                <h5>Place: </h5>
              </div>
              <div>
                <Button
                  style={{
                    width: '80px',
                    backgroundColor: '#0A3056',
                    borderColor: '#0A3056',
                  }}
                  variant="danger"
                  onClick={() => handleDoneClick(appointment.AppointmentID)}
                >
                  done
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
